import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response => console.log(response.data))
    }, [])

    return (
       <Container>
           <table>
               <thead>
                   <tr>
                       <th>Titulo</th>
                       <th>Valor</th>
                       <th>Categoria</th>
                       <th>Data</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Website dev</td>
                       <td className="deposit">R$ 12.000,00</td>
                       <td>Desenvolvimento</td>
                       <td>19/03/2022</td>
                   </tr>
                   <tr>
                       <td>Aluguel</td>
                       <td className="withdraw">-R$ 1.500,00</td>
                       <td>Moradia</td>
                       <td>2/03/2022</td>
                   </tr>
    
                   
               </tbody>
           </table>
       </Container> 
    )
}