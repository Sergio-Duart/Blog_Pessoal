package com.blogPessoal.BlogPessoal.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.blogPessoal.BlogPessoal.Model.TemaModel;
import com.blogPessoal.BlogPessoal.Repository.TemaRepository;

@RestController
@RequestMapping("/Tema")
@CrossOrigin("*")
public class TemaController {

	@Autowired
	private TemaRepository TemaRepos;
	
	@GetMapping
	public ResponseEntity<List<TemaModel>> GetAll() {
		return ResponseEntity.ok(TemaRepos.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<TemaModel> GetById(@PathVariable long id) {
		return TemaRepos.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/categoria/{categoria}")
	public ResponseEntity<List<TemaModel>> GetByNome(@PathVariable String categoria) {
		return ResponseEntity.ok(TemaRepos.findAllBycategoriaContainingIgnoreCase(categoria));
	}
	
	@PostMapping
	public ResponseEntity<TemaModel> Post(@RequestBody TemaModel categoria) {
		return ResponseEntity.ok(TemaRepos.save(categoria));
	}
	
	@PutMapping
	public ResponseEntity<TemaModel> Put(@RequestBody TemaModel categoria) {
		return ResponseEntity.ok(TemaRepos.save(categoria));
	}
	
	@DeleteMapping("/{id}")
	public void Delete(@PathVariable long id) {
		TemaRepos.deleteById(id);
	}
	
}
