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



export default function CreateTeam(){

  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const { toast } = useToast()

  function handleCreateTeam(){

    axios.post('http://localhost:3001/team/create', {
      "class": name,
      "room": room
    })
    .then(function (response) {
      console.log(response);
      toast({
        title: "Tým vytvořen",
        description: "Vytvořen tým " + name + " s místností " + room,
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
        <Card className="flex-1">
      <CardHeader>
        <CardTitle>Vytvořit tým</CardTitle>
        <CardDescription>Vytvoř tým za svou třídu. Nevytvářej další, pokud-li jsi již jeden vytvořil.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input onChange={(event) => setName(event.target.value)} id="name" placeholder="2.I" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="room">Třída</Label>
              <Input onChange={(event) => setRoom(event.target.value)} id="room" placeholder="2207" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleCreateTeam}>Vytvořit</Button>
      </CardFooter>
    </Card>
    )
}