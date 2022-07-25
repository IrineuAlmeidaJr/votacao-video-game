import { Header } from "../components/Header";
import { Item } from "../components/Item";
import { TextField, Button} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useEffect, useState } from "react";

export function Home() {
    const [listaVideoGames, setlistaVideoGames] = useState([]);
    const [nome, setNome] = useState('');
    const [urlImg, setUrlImg] = useState('');


    useEffect(() => {
        const url = "https://vote-video-game-api.herokuapp.com/videogame";
        fetch("https://vote-video-game-api.herokuapp.com/videogame",{
            method: "GET",
        })
        .then(response => {
            response.json().then(data => {
                console.log(data);
            });
        }).catch(function(err) {
            console.error('Failed retrieving information', err);
        });

    })


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
                        />
                        <TextField
                        sx={{ mb: 1 }}
                        required
                        id="outlined-required"
                        label="URL Imagem"
                        defaultValue=" "
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
                        >
                            Enviar
                        </Button>
                        
                   </aside>
                   <section className="w-full py-5 mr-4 grid grid-cols-3 gap-x-8 gap-y-4 bg-yellow-100/30 rounded-md overflow-auto">
                        < Item 
                            pos={1}
                            url={"https://images.kabum.com.br/produtos/fotos/135586/nintendo-switch-32gb-1x-joycon-neon-azul-vermelho-hbdskaba2_1610110214_gg.jpg"}
                        />
                        < Item 
                            pos={1}
                            url={"https://images.kabum.com.br/produtos/fotos/135586/nintendo-switch-32gb-1x-joycon-neon-azul-vermelho-hbdskaba2_1610110214_gg.jpg"}
                        />
                        < Item 
                            pos={1}
                            url={"https://images.kabum.com.br/produtos/fotos/135586/nintendo-switch-32gb-1x-joycon-neon-azul-vermelho-hbdskaba2_1610110214_gg.jpg"}
                        />

                   </section>
               </section>
            </div>
        </div>
    );
}