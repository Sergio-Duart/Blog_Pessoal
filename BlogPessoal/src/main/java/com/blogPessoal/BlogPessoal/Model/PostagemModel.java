package com.blogPessoal.BlogPessoal.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Postagens")
public class PostagemModel {

	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
	private String titulo;
	private String conteudo;
	private @Temporal(TemporalType.TIMESTAMP) Date data = new java.sql.Date(System.currentTimeMillis());

	@ManyToOne
	@JsonIgnoreProperties ("Postagens")
	private TemaModel atriTema;

	@ManyToOne
	@JsonIgnoreProperties ("Postagens")
	private UsuarioModel atriUsuario;
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getConteudo() {
		return conteudo;
	}
	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}
	public TemaModel getAtriTema() {
		return atriTema;
	}
	public void setAtriTema(TemaModel atriTema) {
		this.atriTema = atriTema;
	}
	public UsuarioModel getAtriUsuario() {
		return atriUsuario;
	}
	public void setAtriUsuario(UsuarioModel atriUsuario) {
		this.atriUsuario = atriUsuario;
	}
	
	
}
