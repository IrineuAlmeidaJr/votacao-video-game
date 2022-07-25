import { Header } from "../components/Header";
import { Item } from "../components/Item";
import { TextField, Button} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useEffect, useState } from "react";

export function Home() {
    const [listaVideoGames, setListaVideoGames] = useState([]);
    const [votos, setVotos] = useState(0);
    const [nome, setNome] = useState('a');
    const [urlImg, setUrlImg] = useState('a');

    function ordenarPorVotos(data) {
        let temp = data;
        let aux, pos;
        for(let i = 1; i < temp.length; i++) {
            aux = temp[i];
            pos = i;
            while(pos > 0 && aux.votes > temp[pos - 1].votes) {
                temp[pos] = temp[pos-1];
                pos--;
            }
            temp[pos]=aux;
        }

        for(let i = 0; i < temp.length; i++) {
            temp[i].votes = i+1;
        }

        return temp;   
    }

    useEffect(() => {
        const url = "https://vote-video-game-api.herokuapp.com/videogame";
        fetch("https://vote-video-game-api.herokuapp.com/videogame",{
            method: "GET",
        })
        .then(response => {
            response.json().then(data => {
                setListaVideoGames(ordenarPorVotos(data));                
            })
        }).catch(function(err) {
            console.error('Failed retrieving information', err);
        });
    })

    function handleNewVideoGame() {
        console.log(`${nome}  |  ${urlImg}`)   
    }


    return(
        <div className="min-h-screen bg-game bg-cover bg-no-repeat flex flex-col items-center font-['roboto']"
        >
            <div className="w-[95%] xl:w-[85%] my-8 p-4 flex flex-1 flex-col bg-yellow-100/30 rounded-md">
               <Header />
               <section className="w-full mt-4 py-5 flex flex-1 flex-row justify-center bg-yellow-100/30 rounded-md">
                   <aside className="px-4 flex flex-col">
                        <h2 className="text-gray-800 text-lg font-light my-4">Inserir: </h2>
                        <TextField
                        sx={{ mb: 3 }}
                        required
                        id="outlined-required"
                        label="Nome Video Game"
                        defaultValue=" "
                        onChange={e => setNome(e.target.value)}
                        />
                        <TextField
                        sx={{ mb: 1 }}
                        required
                        id="outlined-required"
                        label="URL Imagem"
                        defaultValue=" "
                        onChange={e => setUrlImg(e.target.value)}
                        />
                        <Button 
                        variant="contained" 
                        endIcon={<Send />}
                        style={{
                            borderRadius: 12,
                            backgroundColor: "#b03c2f",
                            padding: "8px",
                            fontSize: "12px"
                        }}
                        onClick={handleNewVideoGame}
                        >
                            Enviar
                        </Button>
                        
                   </aside>
                   <section className="w-full py-5 mr-4 grid grid-cols-3 gap-x-8 gap-y-4 bg-yellow-100/30 rounded-md overflow-auto">
                        {
                            listaVideoGames.map(videoGame => (
                                < Item 
                                pos={videoGame.votes}
                                nome={videoGame.name}
                                url={videoGame.urlImage}
                                />
                            ))
                        }
                   </section>
               </section>
            </div>
        </div>
    );
}