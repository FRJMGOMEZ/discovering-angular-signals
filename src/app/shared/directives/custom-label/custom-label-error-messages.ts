



export const getErrorMessage = (key:string,control?:any) : string=>{
    let message = '';
    switch(key){
        case 'required':
            message = 'El valor es obligatorio.';
        break;
        case 'minlength':
            message = `El número mínimo de caracteres es de ${control.errors['minlength'].requiredLength}.`;
            break;
        case 'email':
            message = 'El formato del email no es el correcto.';
        break;
    }

    return message;
}