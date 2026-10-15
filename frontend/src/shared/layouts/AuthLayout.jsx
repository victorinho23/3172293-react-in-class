import {  useState, useEffect  } from "react";
import {Outlet} from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import {Input, 
    Button, 
    Select, 
    Checkbox} from "@/shared";
import {  getDocumentTypes  } from "../../services/selectServices";



export default function AuthLayout(){
    // Estado para los tipos de documento

    const [documentTypes, setDocumentTypes] = useState([])

    // Uso del estado useEffect

    useEffect(()=>{
        getDocumentTypes().then(setDocumentTypes);
    },[])

    return(
        <>
            <div
                className="min-h-screen w-full"
                style ={{
                    backgroundImage: `url(${authBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
            }}
        >
                <main className="mx-auto">
                    <Input 
                        label="Nombre"
                        type="text"
                        placeholder="Escribe tu nombre"
                        htmlFor= "user-name"
                        variant="secondary"

                    />

                    <Input 
                        label="Correo"
                        type="email"
                        placeholder="Escribe tu correo"
                        htmlFor= "user-email"
                       
                    />

                    <Input 
                        label="Telefono"
                        type="tel"
                        placeholder="Escribe tu nombre"
                        htmlFor= "user-phone"
                    />

                    <Input 
                        label="Borrar tipo documento"
                        type="text"
                        placeholder="Escribe tu nombre"
                        htmlFor= "Campo de nombre"
                    />

                    <Input 
                        label="Documento"
                        type="text"
                        placeholder="Escribe tu numero de documento"
                        htmlFor= "user-document-number"
                    />

                     <Select 
                        label="Tipos de documento"
                        name="userDocumentTypes"
                        htmlFor="userDocumentTypes"
                        options={documentTypes}
                    
                    />

                    <Checkbox/>

                    {/** Actions */}

                    <div className="flex gap-6 items-center">
                        <Button
                            variant = "secondary"
                            size ="sm"
                            type = "submit"
                            onClick={()=> console.log("Se oprimio el boton")}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant = "primary"
                            size ="md"
                            type = "submit"
                            onClick={()=> console.log("Se oprimio el boton")}
                        >
                            Guardar
                        </Button>
                    </div>{/** Actions */}


                    {/**Implementacion de use effect */}

                    

                   

                    

                 <Outlet />
                 
                </main>
                

                
            </div>
        </>
    );
}