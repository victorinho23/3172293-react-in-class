export default function Input({
    label,
    htmlFor,
    type = "text",
    ...props

}){

    return(
        <div className="w-80">

            {/* Label*/}

        <label 
            htmlFor={htmlFor}
            className="
                block
                text-caption
                mb-1
                text-secondary
            "

            >
            {label} 
        </label>

        {/* Contenedor input */}

        <div 
            className="
            relative
            h-10
            flex
            items-center
            "


        >

        {/* Area Interactiva invisible de 48px */}
        
        <div 
            className="
            absolute inset-0

        
        
        "   

            onMouseDown={(e) =>{
                e.preventDefault();
                e.currentTarget.nextSibling.focus();
            }}
        />
           
        {/* Input visual */}

        <input 
        
        type={type}
        className="
            w-full
            h-10
            rounded-md
            border border-black
            px-4
            text-body
            
            focus:outline-none
            focus:ring-2
            focus:ring-ring
            focus:ring-brand
        "
        {...props}

        />

        </div>

        


        </div>












    
    )

}
