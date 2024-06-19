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


export default function MatchPlan(){

    const { toast } = useToast()
    const [team1, setTeam1] = useState("")
    const [team2, setTeam2] = useState("")
    const [startTime, setStartTime] = useState("")

    function handleMatchPlan(){

        const url = 'http://localhost:3001/match/plan'
    
        axios.post(url , {
          "team1": team1,
          "team2": team2,
          "start": startTime
        })
        .then(function (response) {
          console.log(response);
          toast({
            title: "Utkání vytvořeno",
            description: "Utkání " + team1 + " vs " + team2 + " je naplánováno na čas " + startTime,
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
            <CardTitle>Naplánuj utkání</CardTitle>
            <CardDescription>Zde můžeš pomocí zadání ID týmů a času naplánovat utkání</CardDescription>
        </CardHeader>
        <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="team1">ID Týmu 1</Label>
              <Input onChange={(event) => setTeam1(event.target.value)} id="team1" placeholder="XXXXXX" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="team2">ID Týmu 2</Label>
              <Input onChange={(event) => setTeam2(event.target.value)} id="team2" placeholder="XXXXXX" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="startTime">Čas startu utkání</Label>
              <Input onChange={(event) => setStartTime(event.target.value)} id="startTime" placeholder="XX:XX:XX" type="time"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleMatchPlan}>Naplánovat</Button>
      </CardFooter>
        </Card>
    )
}