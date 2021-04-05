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

import com.blogPessoal.BlogPessoal.Model.PostagemModel;
import com.blogPessoal.BlogPessoal.Repository.PostagemRepository;

@RestController
@RequestMapping("/Postagem")
@CrossOrigin("*")
public class PostagemController {

	@Autowired
	private PostagemRepository PostRepos;
	
	@GetMapping
	public ResponseEntity<List<PostagemModel>> GetAll() {
		return ResponseEntity.ok(PostRepos.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<PostagemModel> GetById(@PathVariable long id) {
		return PostRepos.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<PostagemModel>> GetByNome(@PathVariable String titulo) {
		return ResponseEntity.ok(PostRepos.findAllBytituloContainingIgnoreCase(titulo));
	}

	@PostMapping
	public ResponseEntity<PostagemModel> Post(@RequestBody PostagemModel titulo) {
		return ResponseEntity.ok(PostRepos.save(titulo));
	}
	
	@PutMapping
	public ResponseEntity<PostagemModel> Put(@RequestBody PostagemModel titulo) {
		return ResponseEntity.ok(PostRepos.save(titulo));
	}
	
	@DeleteMapping
	public void Delete(@PathVariable long id) {
		PostRepos.deleteById(id);
	}
	
}
