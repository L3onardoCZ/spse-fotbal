import CreateTeam from "./adminPanelComponents/CreateTeam";
import CreatePlayer from "./adminPanelComponents/CreatePlayer";
import LoadTeam from "./adminPanelComponents/LoadTeam";
import LoadAllTeams from "./adminPanelComponents/LoadAllTeams";
import SetPlayerPosition from "./adminPanelComponents/SetPlayerPosition";
import MatchGet from "./adminPanelComponents/MatchGet"
import MatchGetById from "./adminPanelComponents/MatchGetById";
import IncreaseScore from "./adminPanelComponents/IncreaseScore";
import PlannedMatches from "./adminPanelComponents/PlannedMatches"
import MatchPlan from "./adminPanelComponents/MatchPlan"
import { Button } from "@/components/ui/button"
import axios from "axios" 

export default function AdminPanel() {

  function logOut(){
    axios.get('http://localhost:3001/auth/logout', {
    })
    .then(function (response) {
      console.log(response);
      window.location.reload()
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="md:w-2/3 flex flex-col">
          <div className="w-full flex justify-center p-4 pt-28 md:pt-40 flex-col md:flex-row gap-4">
            <CreateTeam />
            <CreatePlayer />
            <SetPlayerPosition />
          </div>
          <div className="w-full flex justify-center px-4 flex-col md:flex-row gap-4">
            <LoadTeam />
          </div>
          <div className="w-full flex justify-center px-4 pt-4 flex-col md:flex-row gap-4">
            <LoadAllTeams />
          </div>
          <div className="w-full flex justify-center p-4 flex-col md:flex-row gap-4">
            <MatchGet />
            <MatchGetById />
            <IncreaseScore />
          </div>
          <div className="w-full flex justify-center px-4 pt-4 flex-col md:flex-row gap-4">
            <PlannedMatches />
          </div>
          <div className="w-full flex justify-center px-4 pt-4 flex-col md:flex-row gap-4">
            <MatchPlan />
          </div>
          <div className="w-full flex justify-center pt-4 pb-24">
            <Button onClick={logOut}>Odhlásit se</Button>
          </div>

        </div>
      </div>
      
    </>
  )
}