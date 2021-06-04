const EncodedToBlob = (imageEncoded) => {
    const binaryString = atob (imageEncoded);
    const bytes = new Uint8Array (binaryString.length); 
    let bit =  bytes.map ((_, i) => binaryString.charCodeAt (i));
    
    const blob = new Blob ([bit]);
    return URL.createObjectURL(blob);
}

export {EncodedToBlob};