import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function MatchGet(){
    return(
        <Card className="flex-1">
        <CardHeader>
            <CardTitle>Nejbližší proběhlé / probíhající utkání</CardTitle>
            <CardDescription>Zde se zobrazí nejbližší proběhlé, nebo probíhající utkání</CardDescription>
        </CardHeader>
        </Card>
    )
}