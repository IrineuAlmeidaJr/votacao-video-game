package br.com.irineu.votacao.video.game;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RepositoryLanguages extends MongoRepository<VideoGame, String> {

    Optional<VideoGame> getById(String id);
}
