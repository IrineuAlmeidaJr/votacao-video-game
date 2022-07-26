import { Header } from "../components/Header";
import { Item } from "../components/Item";
import { TextField, Button} from "@mui/material";
import { PropaneSharp, Upload } from "@mui/icons-material";
import { useEffect, useState } from "react";
// import UploadIcon from '@mui/icons-material/Upload';

export function Home() {
    const [listaVideoGames, setListaVideoGames] = useState([]);
    const [isChange, setIsChange] = useState(0);
    const [nome, setNome] = useState('');
    const [urlImg, setUrlImg] = useState('');

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

    function handleNewVideoGame(e) {
        e.preventDefault();
        if(nome === '' || urlImg === '') {
            // mudar depois para uma mais bonito
            alert('Insira algo nos campos nopme urlImg');
            return; 
        } 

        const videoGame = {
            name: nome,
            urlImage: urlImg,
        }

        const url = "https://vote-video-game-api.herokuapp.com/videogame";
        fetch('https://vote-video-game-api.herokuapp.com/videogame', {
            method: "POST", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: nome, urlImage: urlImg})
        });
    }

    function votarVideoGame() {
        const url = `https://vote-video-game-api.herokuapp.com/videogame/${props.id}`;
        fetch(url,{
            method: "PUT",
        })
    }

    useEffect(() => {
        console.log("Carregou")
        setTimeout(() => {
            const url = "https://vote-video-game-api.herokuapp.com/videogame";
            fetch(url,{
                method: "GET",
            })
            .then(response => {
                response.json().then(data => {
                    setListaVideoGames(ordenarPorVotos(data));                
                })
            }).catch(function(err) {
                console.error('Failed retrieving information', err);
            });
          }, 500);
    });

    return(
        <div className="min-h-screen bg-game bg-cover bg-no-repeat flex flex-col items-center font-['roboto']"
        >
            <div className="w-[95%] xl:w-[85%] my-8 p-4 flex flex-1 flex-col bg-yellow-100/30 rounded-md">
               <Header />
               <section className="w-full mt-4 py-5 flex flex-1 flex-col lg:flex-row justify-center bg-yellow-100/30 rounded-md">
                   <aside className="w-full 2xl:w-[30%] xl:w-[30%] lg:w-[30%] my-6 px-4 flex flex-col 
                   lg:justify-start  justify-center 
                   items-center">
                        {/* <h2 className="text-gray-800 text-lg font-light my-4">Inserir: </h2> */}
                        <TextField
                        className="w-full"
                        sx={{ mb: 3 }}
                        required
                        id="outlined-required"
                        label="Nome Video Game"
                        defaultValue=" "
                        onChange={e => setNome(e.target.value)}
                        />
                        <TextField
                        className="w-full"
                        required
                        id="outlined-required"
                        label="URL Imagem"
                        defaultValue=" "
                        onChange={e => setUrlImg(e.target.value)}
                        />
                        <Button
                        className="w-[50%]"
                        sx={{ mt: 2 }}
                        variant="contained" 
                        endIcon={<Upload />}
                        style={{
                            borderRadius: 12,
                            backgroundColor: "#b03c2f",
                            padding: "8px",
                            fontSize: "12px"
                        }}
                        onClick={handleNewVideoGame}
                        >
                            Inserir
                        </Button>
                    </aside>
                    <section className="w-full py-5 mr-4 
                    grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  
                    gap-x-8 gap-y-4 bg-yellow-100/30 rounded-md overflow-auto">
                            {
                                listaVideoGames.map(videoGame => (
                                    < Item 
                                    isChange={isChange}
                                    setIsChange = {setIsChange}
                                    key={videoGame.id}
                                    id={videoGame.id}
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