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



export default function CreateTeam(){
    return(
        <Card>
      <CardHeader>
        <CardTitle>Vytvořit tým</CardTitle>
        <CardDescription>Vytvoř tým za svou třídu. Nevytvářej další, pokud-li jsi již jeden vytvořil.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="team_name">Name</Label>
              <Input id="team_name" placeholder="2.I" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="room">Třída</Label>
              <Input id="room" placeholder="2207" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Vytvořit</Button>
      </CardFooter>
    </Card>
    )
}