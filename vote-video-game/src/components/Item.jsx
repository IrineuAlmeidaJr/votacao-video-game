import { Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";


export function Item(props) {

    function votar() {
        const url = `https://vote-video-game-api.herokuapp.com/videogame/${props.id}`;
        fetch(url,{
            method: "PUT",
        })
    }

    return (
        <div key={props.pos} className="bg-white m-2 max-h-[300px] flex flex-1 flex-col justify-center
            border-2 hover:border-[#b03c2f] rounded-lg overflow-hidden"> 
            <p className="flex  bg-[#b03c2f] text-white justify-center items-center">
                {props.nome}
            </p>
            <div className="w-[250px]">
                <img 
                src={props.url}
                className="object-scale-down h-48 w-96"
                />
            </div>
            
            <div className="w-full m-1 flex flex-1  justify-center items-center">
                <p className="mr-4 text-[#b03c2f] font-medium">{props.pos}º</p> 
                <Button 
                variant="contained" 
                style={{
                    width: "1em",
                    borderRadius: 12,
                    backgroundColor: "#b03c2f",
                    padding: "8px",
                    fontSize: "12px"
                }}
                onClick={votar}
                >
                    <Favorite />
                </Button>

            </div>
            
        </div>
    )

}