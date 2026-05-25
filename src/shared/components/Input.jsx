export default function Input({
    label,
    htmlFor,
    type = "text",
    variant="secondary",
    size="sm",
    ...props

}){
    const variants = {
        // Estos valores deben ser con variables
        primary: `
            border border-brand
            bg-yellow-950
        `,
        secondary: `
            border border-brand
            bg-background
        `,
        tertiary: `
            border border-purple-950
        
        `,
    }

    const sizes = {
        sm: `
            h-8
            
        `,
        md: `
            h-10
        
        `,
        lg: `
           h-12
           
        
        `,
    }

   

    return(
        <div className="w-80">

            {/* Label*/}

        <label 
            // El html for cuando es largo se hace con kebab-case
            htmlFor={htmlFor}
            className={`
                block
                text-caption
                text-secondary
                ${
                  size === "sm"
                  ? "-mb-1"
                  : size === "md"
                  ? "mb-0"
                  : "mb-1"
                }
                 
            `}

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
        id={htmlFor}
        type={type}
        className={`
            relative
            w-full
            rounded-md
            border
            text-body
            
            focus:outline-none
            px-4
            focus:ring-2
            focus:ring-ring
            focus:ring-brand
            ${variants[variant]}
            ${sizes[size]}
            
            
        `}
        {...props}

        />

        </div>

        


        </div>












    
    )

}
