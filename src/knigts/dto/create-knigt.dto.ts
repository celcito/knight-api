
interface Weapon {
    name: string;
    mod: number;
    attr: string;
    equipped: boolean;
  }
  
interface KnigtAttributes {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }
  

export class CreateKnigtDto { 
  
    
    
    
    readonly name:string;
    
    
    
    readonly nickname:string;
    
    
    
    readonly birthday:Date;
    
    
    
    readonly weapons:Weapon[]
    
    
    
    readonly attributes:KnigtAttributes;
    
    
    
    readonly keyAttribute:string;
    
  
    

}