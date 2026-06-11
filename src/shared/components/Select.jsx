//  Componente Select

export default function Select({

    label,
    htmlFor,
    name, 
    options = [],

}){
    



    return(
        <div>
            {/** Label solo se muestra si truhty es un uno logico */}
            {label && (
            <label 
                htmlFor={htmlFor}
                className="
                    block 
                    text-caption 
                    text-secondary
                    ">
                {label}
            </label>
        )}

        {/** Select */}

        <select 
            name={name}
            id="htmlFor"
            className="
                w-80
                h12
                rounded-md
                border-border
                hover:border-2
                hover:border-focus-border
            "
        >

        <option value="">Seleccione una opcion</option>  

        {options.map ((opt)=> (
            <option key = {opt.value} value= {opt.value}>
                {opt.label}
            </option>

        ))}

        </select>


        </div>
    )
}
