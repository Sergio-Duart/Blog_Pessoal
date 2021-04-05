package com.blogPessoal.BlogPessoal.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogPessoal.BlogPessoal.Model.LoginModel;
import com.blogPessoal.BlogPessoal.Model.UsuarioModel;
import com.blogPessoal.BlogPessoal.Repository.UsuarioRepository;
import com.blogPessoal.BlogPessoal.Service.UsuarioService;

@RestController
@RequestMapping("/Usuario")
@CrossOrigin("*")
public class UsuarioController {

	@Autowired
	public UsuarioRepository UsuaRepos;
	
	@Autowired
	public UsuarioService UsuaServ;
	
	@GetMapping
	public ResponseEntity<List<UsuarioModel>> GetAll () {
		return ResponseEntity.ok(UsuaRepos.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UsuarioModel> GetById(@PathVariable long id) {
		return UsuaRepos.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<UsuarioModel>> GetByNome(@PathVariable String nome) {
		return ResponseEntity.ok(UsuaRepos.findAllBynomeContainingIgnoreCase(nome));
	}
	
	@PostMapping
	public ResponseEntity<UsuarioModel> Post(@RequestBody UsuarioModel nome) {
		return ResponseEntity.ok(UsuaRepos.save(nome));
	}
	
	@PostMapping("/logar")
	public ResponseEntity<LoginModel> Autentication(@RequestBody Optional<LoginModel> user) {
		return UsuaServ.logar(user).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<UsuarioModel> PostCadastrar(@Valid @RequestBody UsuarioModel usuario) {
		return ResponseEntity.status(HttpStatus.CREATED).body(UsuaServ.cadastrarUsuario(usuario));
	}
	
	@PutMapping
	public ResponseEntity<UsuarioModel> Put(@RequestBody UsuarioModel nome) {
		return ResponseEntity.ok(UsuaRepos.save(nome));
	}
	
	@DeleteMapping("/{id}")
	public void Delete(@PathVariable long id) {
		UsuaRepos.deleteById(id);
	}
	
}
