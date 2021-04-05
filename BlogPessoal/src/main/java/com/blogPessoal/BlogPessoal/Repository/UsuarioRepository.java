package com.blogPessoal.BlogPessoal.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blogPessoal.BlogPessoal.Model.UsuarioModel;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {

	public List<UsuarioModel> findAllBynomeContainingIgnoreCase (String nome);
	public Optional<UsuarioModel> findByNome (String nome);
	
}
