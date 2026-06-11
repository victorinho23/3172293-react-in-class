// User regtister form para registrarn un usuario
import { useState, useEffect } from "react";
import {Input, Select, CheckBox, Button} from "@/shared";
import { getDocumentTypes } from "@/service/selectServices";

export default function UserRegisterForm(){
    // Estado del formulario
    
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
        userImage: [],

        isStaff: false,
        isActive: false,
        isSuperUser: false,


    });


    
    const handleChange = (e) => {
        //Se obtiene el nombre del campo y su valor 

        const {name, value, type, checked} = e.target;

        setFormData((prev) => ({
            // Se copian todos los valores anterirores del estado
            ...prev,

            // Se actualiza unicamente lo que cambio

            [name]: type === "checkbox" ? checked: value
    }))
}

    const handleSubmit = async (e) => {
        // Evita que el formulario recargue la pagina
        e.preventDefault();
    

    // Validamos los datos del formulario contra el esquema Zod
    // safeParse No lanza excepcion, retorna un objeto controlado

    const result = userSchema.safeParse(formData)

    // Si la validacion falla
    if (!result.success){
        // Objeto donde almacenaremos los errores por campo
        const fieldErrors = {};
    }

    // Recorremos cada error generado por Zod
    result.error.issues.forEach((issue) => {
    // issue.path[0] corresponde al nombre del campo
    // issue.message contiene el mensaje de error definido en el schema
    fieldErrors[issue.path[0]] = issue.message;
    });

    return;
}
    setErrors({});

}

    const [documentTypes, setDocumentTypes] = useState([])
    
    
    
        useEffect(()=>{
            getDocumentTypes().then(setDocumentTypes);
        },[])


    return(
        <div>
            <Input 
                label="Nombre"
                type="text"
                placeholder="Escribe tu nombre"
                htmlFor= "user-name"
                variant="secondary"

            />

            <Input 
                label="Telefono"
                type="tel"
                placeholder="Escribe tu nombre"
                htmlFor= "user-Phone"
                variant="secondary"

            />
            <Input 
                label="Correo"
                type="email"
                placeholder="Escribe tu Correo Electronico"
                htmlFor= "user-email"
                variant="secondary"

            />



            <Select 
                label="Tipos de documento"
                name="userDocumentTypes"
                htmlFor="userDocumentTypes"
                options={documentTypes}
                    
            />

            <Input 
                label="Documento"
                type="text"
                placeholder="Escribe tu numero documento"
                htmlFor= "user-document-number"
                variant="secondary"

            />

            <Input 
                label="Contraseña"
                type="password"
                placeholder="Escribe tu contraseña"
                htmlFor= "user-password"
                variant="secondary"

            />

            <CheckBox 
                id="isSuperUser"
                name="isSuperUser"
                label= "es super usuario"
                checked={formData.isSuperUser}
                onChange={handleChange} 
             /> 
            <CheckBox
                id="isStaff"
                name="isStaff"
                label= "es staff"
                checked={formData.isStaff}
                onChange={handleChange} 
            
            /> 
            <CheckBox
                id="isActive"
                name="isActive"
                label= "esta activo"
                checked={formData.isActive}
                onChange={handleChange} 

            />

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
                            onClick={()=> console.log("Seoprimio el boton")}
                        >
                            Guardar
                        </Button>
                    </div>{/** Actions */}

                   

        </div>


    )
}