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

export default function IncreaseScore(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Změň skóre utkání</CardTitle>
                <CardDescription>Zadej ID utkání a změň jeho skóre</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="match_id">ID utkání</Label>
                    <Input id="match_id" placeholder="XXXXXX" />
                    <Label htmlFor="team_id">ID týmu</Label>
                    <Input id="team_id" placeholder="XXXXXX" />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
                <Button>+</Button>
                <Button>-</Button>
            </CardFooter>
            </Card>
    )
}