import Action from '../action';
import { ENDPOINTS, Region } from '../../../riot-api';
import SubmoduleMapInterface from '../../interfaces/submodule-map';

class FetchThirdPartyCodeBySummonerId extends Action {
    constructor(SubmoduleMap: SubmoduleMapInterface, region: Region, summonerId: string) {
        super(SubmoduleMap, region);

        this.summonerId = summonerId;
    }

    public async exec(): Promise<string> {
        return this.run<string>(ENDPOINTS.PLATFORM.THIRD_PARTY_CODE.SUMMONER_ID, { server: this.region, 'summoner-id': this.summonerId });
    }
}

export default FetchThirdPartyCodeBySummonerId;
