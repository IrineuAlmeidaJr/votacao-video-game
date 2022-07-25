package br.com.irineu.votacao.video.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class VideoGameController {

    @Autowired
    private RepositoryLanguages repository;

    @GetMapping("/videogame")
    public List<VideoGame> getAllVideoGame(){
        return repository.findAll();
    }

    @PostMapping(value = "/videogame", consumes = {"*/*"})
    public ResponseEntity<VideoGame> createVideoGame(@PathVariable String newName, String newUrl) {
        if(newName != null && newUrl != null && !newName.equals(" ") && !newUrl.equals(" ")) {
            VideoGame videoGame = new VideoGame(newName, newUrl);
            repository.save(videoGame);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // O update aqui apenas realiza o incremento do voto
    @PutMapping("/videogame/{id}")
    public VideoGame updateVideoGame(@PathVariable String id) {
        var videoGame  = repository.getById(id)
                .orElseThrow(() -> new IllegalArgumentException("ID '"+ id + "' not found."));

        int vote = videoGame.getVotes();
        videoGame.setVotes(vote + 1);

        return repository.save(videoGame);
    }

    @DeleteMapping("/videogame/{id}")
    public void deletarLinguagen(@PathVariable String id) {
        repository.deleteById(id);
    }


}