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


export default function SetPlayerPosition(){
    return(
        <>
            <Card className="flex-1">
      <CardHeader>
        <CardTitle>Nastavit pozici hráče</CardTitle>
        <CardDescription>Nastav pozici hráčů ve svém týmu</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="player_id">ID Hráče</Label>
              <Input id="player_id" placeholder="XXXXXX" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="position">Pozice</Label>
              <Input id="position" placeholder="X" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Nastavit</Button>
      </CardFooter>
    </Card>
        </>
    )
}