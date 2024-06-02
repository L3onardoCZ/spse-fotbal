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

export default function LoadTeam(){
    return(
        <>
                <Card className="flex-1">
            <CardHeader>
                <CardTitle>Získat informace o týmu</CardTitle>
                <CardDescription>Zadej ID týmu a získej informace o něm</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="team_id">ID Týmu</Label>
                    <Input id="team_id" placeholder="XXXXXX" />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Vytvořit</Button>
            </CardFooter>
            </Card>
        </>
    )
}