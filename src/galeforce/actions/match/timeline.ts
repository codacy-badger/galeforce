import Action from '../action';
import { MatchTimelineInterface } from '../../interfaces/dto';
import { ENDPOINTS, LeagueRegion } from '../../../riot-api';
import SubmoduleMapInterface from '../../interfaces/submodule-map';

class GetTimeline extends Action {
    constructor(SubmoduleMap: SubmoduleMapInterface) {
        super(SubmoduleMap);
        this.payload.endpoint = ENDPOINTS.MATCH.TIMELINE.MATCH_ID;
        this.payload.type = 'lol';
    }

    public region: (region: LeagueRegion) => this = super.region;

    public matchId(matchId: number): this {
        this.payload.matchId = matchId;
        return this;
    }

    public async exec(): Promise<MatchTimelineInterface> {
        return this.run<MatchTimelineInterface>();
    }
}

export default GetTimeline;
