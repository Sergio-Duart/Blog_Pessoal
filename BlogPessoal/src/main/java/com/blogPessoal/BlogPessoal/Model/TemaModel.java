package com.blogPessoal.BlogPessoal.Model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Tema")
public class TemaModel {

	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
	private String categoria;
	
	@OneToMany (mappedBy = "atriTema", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties ("Tema")
	private List<PostagemModel> postagens;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public List<PostagemModel> getPostagens() {
		return postagens;
	}
	public void setPostagens(List<PostagemModel> postagens) {
		this.postagens = postagens;
	}
		
}
