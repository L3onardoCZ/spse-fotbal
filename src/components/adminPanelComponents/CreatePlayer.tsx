"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios" 
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"



export default function CreatePlayer(){

  const [teamId, setTeamId] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const { toast } = useToast()


  function handleCreatePlayer(){

    const url = 'http://localhost:3001/team/'+ teamId +'/add-player'

    axios.post(url , {
      "first_name": name,
      "last_name": surname,
      "bench": 0,
      "position": 1
    })
    .then(function (response) {
      console.log(response);
      toast({
        title: "Tým vytvořen",
        description: "Hráč " + name + " " + surname + " byl do přidán do týmu " + teamId,
        variant: "success"
      })
    })
    .catch(function (error) {
      console.log(error);
      toast({
        title: "KRUCIŠ, nepovedlo se",
        description: "Chyba " + error,
        variant: "destructive",
      })
    });
  }


    return(
    <Card>
      <CardHeader>
        <CardTitle>Přidat hráče</CardTitle>
        <CardDescription>Přidej jako administrátor hráče do svého týmu</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="team_id">ID Týmu</Label>
              <Input onChange={(event) => setTeamId(event.target.value)} id="team_id" placeholder="XXXXXX" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Jméno</Label>
              <Input onChange={(event) => setName(event.target.value)} id="name" placeholder="Prokop" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="surname">Příjmení</Label>
              <Input onChange={(event) => setSurname(event.target.value)} id="surname" placeholder="Dveře" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleCreatePlayer}>Přidat</Button>
      </CardFooter>
    </Card>
    )
}