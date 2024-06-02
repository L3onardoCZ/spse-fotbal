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
import AllTeamsTable from "./AllTeamsTable"
import { useState } from "react"

export default function LoadAllTeams() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Načti všechny registrované týmy</CardTitle>
          <CardDescription>Načti všechny týmy, které se registrovali u nás na stránce a získej informace o nich</CardDescription>
        </CardHeader>
        {isClicked ? <div className="px-4"><AllTeamsTable /></div> : null}
        <CardFooter className="flex justify-between">
          <Button onClick={() => setIsClicked(true)}>Načíst</Button>
        </CardFooter>
      </Card>
    </>
  )
}
