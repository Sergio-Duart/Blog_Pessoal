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
@Table(name = "Usuário")
public class UsuarioModel {

	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
	private String nome;
	private String usuario;
	private String senha;
	private String foto;
	private String tipo;
	
	@OneToMany (mappedBy = "atriUsuario", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties ("Usuário")
	private List<PostagemModel> postagens;

	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public List<PostagemModel> getPostagens() {
		return postagens;
	}
	public void setPostagens(List<PostagemModel> postagens) {
		this.postagens = postagens;
	}

}
