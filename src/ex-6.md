###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 

Generellt sett är types mer flexibla än interfaces och types är en kollektion av datatyper medan interface är syntax. Du kan exempelvis ha två typer med samma namn utan att få klagomål medan två interfaces med samma namn blir "mergade"

interface User {
    readonly dbId: number;        
    email: string;                
    userId: number;           
    googleId?: string;        
    startTrial(): string;        
    getCoupon(couponName: string, value: number): number;
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

