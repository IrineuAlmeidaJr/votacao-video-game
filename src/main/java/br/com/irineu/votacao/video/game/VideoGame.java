package br.com.irineu.votacao.video.game;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "votacaoVideoGame")
public class VideoGame {
    @Id
    private String id;
    private String name;
    private String urlImage;
    private int votes;

    public VideoGame(String name, String urlImage, int votes) {
        this.name = name;
        this.urlImage = urlImage;
        this.votes = votes;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public int getVotes() {
        return votes;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    public void setVotes(int votes) {
        this.votes = votes;
    }
}
