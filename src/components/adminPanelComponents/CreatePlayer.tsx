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




export default function CreatePlayer(){

    

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
              <Input id="team_id" placeholder="XXXXXX" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Jméno</Label>
              <Input id="name" placeholder="Prokop" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="surname">Příjmení</Label>
              <Input id="surname" placeholder="Dveře" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Přidat</Button>
      </CardFooter>
    </Card>
    )
}