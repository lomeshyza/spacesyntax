
import Button from "./Button/Button";

export default function TabsSection({active, onChange}) {
      
    return (
        <section style={{marginBottom:'1rem'}}>
            <Button isActive={active==='modeling'} onClick={()=>onChange('modeling')}>Товары для макетирования</Button>
            <Button isActive={active === 'po'} onClick={() => onChange('po')}>ПО</Button>
            
       </section>
    )
}