import React from 'react';
import './App.css';
import Modal from 'react-modal';
import zoom from './zoom.png';
import temp_screenshot from './screenshot.png';
import star from './star.png';
import star_filled from './star_filled.png';
import orientation from './orientation.svg';
import detection from './detection.svg';
import position from './placeholder.svg';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //"http://drive.google.com/uc?export=view&id=FILEID" -> replace FILEID with string of character between file/d/ and /view in the gdrive link
            setA:[
            
                { index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1Tkq5xH-32hTepBKDz4iMDp8HKXIdXoo-/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 1, id: "A12", video: "https://drive.google.com/file/d/1RL8cAKi0R3kf__d2mZCYDXcCm53eqTT-/preview", img: "http://drive.google.com/uc?export=view&id=1ytCzRjlIXNJ_sVlg7X-txV5m5crXyrSQ", current_simulation_text: "Position translated -5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 2, id: "A13", video: "https://drive.google.com/file/d/1kWy3bTo1jyywXlSGFklsrYswb3n0BxWP/preview", img: "http://drive.google.com/uc?export=view&id=1KT52NC0pGb0QxUBAcYc4POVVeTiXIFg4", current_simulation_text: "Position translated +5 cm along the y axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 3, id: "A14", video: "https://drive.google.com/file/d/1dhvgoJwLX7bUXF5-gsbdc6aDepjIMgyA/preview", img: "http://drive.google.com/uc?export=view&id=1HXc_Jf3XYbs9HnkJNodW3daIMVtTcxfP", current_simulation_text: "Position translated -5 cm along the y axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 4, id: "A21", video: "https://drive.google.com/file/d/1d3w7l5RO4WwYc6DsCxfr2EzXY_-YXd31/preview", img: "http://drive.google.com/uc?export=view&id=1pQlWarYHPneCW_cd4yzTbp85GDl8NZOM", current_simulation_text: "Orientation rotated counter clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 5, id: "A22", video: "https://drive.google.com/file/d/1pkVwWHLFD_KQWcgQIZXP20dn8oP42KEd/preview", img: "http://drive.google.com/uc?export=view&id=12gxBuYCXOVTRJovqyADRQkfmPNRvykIK", current_simulation_text: "Orientation rotated clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 6, id: "A23", video: "https://drive.google.com/file/d/1cFJXKhnfOiJhHPr8lR6SzfJStdyTiqw9/preview", img: "http://drive.google.com/uc?export=view&id=1zAJHLBzjRP7rt8yPGZeVK1GyRwB4J5pw", current_simulation_text: "Orientation rotated counter clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 7, id: "A24", video: "https://drive.google.com/file/d/1OOwErp0wcTyepgl5A5v-HC-2Pz36tmml/preview", img: "http://drive.google.com/uc?export=view&id=1reTBwM5PBYXg_CuLRIrCA6Ilq7iC5igA", current_simulation_text: "Orientation rotated clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 8, id: "A31", video: "https://drive.google.com/file/d/1gTg5xyXlzy1Td2qWp_6Xkufmv30zIQt5/preview", img: "http://drive.google.com/uc?export=view&id=1js12WZjGoSdMNitq_JXrA3_WFoFaR3Eb", current_simulation_text: "Laser distance lowered by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 9, id: "A32", video: "https://drive.google.com/file/d/1GxyEiLqMry8H_F6Ds22wOE9dEDWVhQyC/preview" , img: "http://drive.google.com/uc?export=view&id=13YZnvqOLN-8cbSx1fSOMJACgJuB0gcYi", current_simulation_text: "Laser distance increased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 10, id: "A33", video: "https://drive.google.com/file/d/1MZL5QG-SA-6rTAN6plPmOGlhhsYK1Y4h/preview", img: "http://drive.google.com/uc?export=view&id=154ClLxBAwwM-herWPNTE4AaHSmOZ3G_z", current_simulation_text: "Laser intensity filter upper threshold increased to 100 ", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 11, id: "A34", video: "https://drive.google.com/file/d/17e96xWz16-FQ4jrNyVy9F2ALo6VY_cE8/preview", img: "http://drive.google.com/uc?export=view&id=156RyjzLiPoTwMud1gS0-449kt0S6I-tF", current_simulation_text: "Laser outlier filter distance threshold increased to 50 cm", simulation_type: "detection", starred: false, thumbs_up: false},
            ],
            setB:[
                { index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/1if0uuD-a6ma6Y--TYPxR3mnE8SbCsSri/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 1, id: "B12", video: "https://drive.google.com/file/d/1AWPpAQugq5nc66lHFBYLVcaJYl9SG52F/preview", img: "http://drive.google.com/uc?export=view&id=1G9isdVDI_jaxGVWnvBgaUwlBzKtSF3mJ", current_simulation_text: "Second position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 2, id: "B13", video: "https://drive.google.com/file/d/1_DJTVwnBhOniQrhDyRfk1RI-HuYMs9zx/preview", img: "http://drive.google.com/uc?export=view&id=1MFY5xc4OTK_NkKSeBkE599hvRjRWBiSW", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 3, id: "B14", video: "https://drive.google.com/file/d/1OPQUfMoyTMX5dN0U0iUWfAFpXKucb7mW/preview", img: "http://drive.google.com/uc?export=view&id=1COM1pY5pbPPSiul8uUNc6D7fa8rsjRf3", current_simulation_text: "Position translated -5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 4, id: "B21", video: "https://drive.google.com/file/d/1uF7I3WpBZnlMV_0LzuejoyZK-Xgh6g17/preview" , img: "http://drive.google.com/uc?export=view&id=17D6OGC36BgaiY9XDkGN_iEw_TQYCWfqC", current_simulation_text: "Orientation rotated counter clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 5, id: "B22", video: "https://drive.google.com/file/d/1Ct-Kr2LpQv-j_cWzsaRfH03K1XmRX40t/preview", img: "http://drive.google.com/uc?export=view&id=1oY7o3ViKkY79IowQkim7umaVs9VaWUCN", current_simulation_text: "Orientation rotated clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 6, id: "B23", video: "https://drive.google.com/file/d/1LsvTm5Y4QNcew2CIGhTgRjuoQGMkwJiN/preview", img: "http://drive.google.com/uc?export=view&id=1HpbFSs9jm_S5bRMy7I2DqrTPcdYuu-h_", current_simulation_text: "Orientation rotated counter clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 7, id: "B24", video: "https://drive.google.com/file/d/1m8nMKVe3ZxhHachIWTJR_PtF7slMF6Cm/preview" , img: "http://drive.google.com/uc?export=view&id=1LPFBnSFdXoFe3gvigaUiHrgQj7eDqYrs", current_simulation_text: "Orientation rotated clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 8, id: "B31", video: "https://drive.google.com/file/d/1jz6U1ZbM542i6cWba_FT6tsJpC-7FhKx/preview", img: "http://drive.google.com/uc?export=view&id=1zOU0FpL1CgLeSsNw_1sE6MF0DU9QsN0z", current_simulation_text: "Laser distance lowered by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 9, id: "B32", video: "https://drive.google.com/file/d/1_klznxhsSzOxgC3rxo5LvhtJFDwM-scn/preview" , img: "http://drive.google.com/uc?export=view&id=1WTmwT_h18U-rTdSkirOdjSjNsV6Y_hf7", current_simulation_text: "Laser distance increased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 10, id: "B33", video: "https://drive.google.com/file/d/1CRpsl7YUksyhcyuOTFklVdwkxxoNnvc2/preview", img: "http://drive.google.com/uc?export=view&id=1WvgjqmTE_fxz1AGbcPTV1517z5W26Vqa", current_simulation_text: "Laser shadow filter minimum angle reduced to 0 ", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 11, id: "B34", video: "https://drive.google.com/file/d/13ZzhlHr1HaRZpG5P3nyEpwl8Y4FMI4KV/preview" , img: "http://drive.google.com/uc?export=view&id=12vLvqWdWWRJ6pjRa0fSd603jkcohwTOZ", current_simulation_text: "Laser shadow filter maximum angle increased to 180", simulation_type: "detection", starred: false, thumbs_up: false},
            ],
            setC:[
                { index: 0, seenVideosIndex: 0, id: "C11", video: "https://drive.google.com/file/d/1zc_AZFulH8VzaGrZZIR_AlScv7THPI0k/preview", img: "http://drive.google.com/uc?export=view&id=1K5ZbDR7wsnGzxfc7q_uiDixoDRpCJc4r", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 1, id: "C12", video: "https://drive.google.com/file/d/1GRtZiK5S3W5deyVyRUIukneNz0XjjyNG/preview" , img: "http://drive.google.com/uc?export=view&id=1UktyKS48CawgQW7AXpd0423g73zrfI6V", current_simulation_text: "Position translated -5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 2, id: "C13", video: "https://drive.google.com/file/d/1DWfCTtAikY6sjttFa6049KvjdfHgyXB_/preview", img: "http://drive.google.com/uc?export=view&id=1CLVw3hL8JJt7zY4k5THZuqpIofGG79pC", current_simulation_text: "Position translated +5 cm along the y axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 3, id: "C14", video: "https://drive.google.com/file/d/16la2z7v1xHmoBtLPE-2D1X0r-AeOHdKv/preview", img: "http://drive.google.com/uc?export=view&id=1SciueHVGCWweJEIn-atnrlSbQjDzpWq0", current_simulation_text: "Position translated -5 cm along the y axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 4, id: "C21", video: "https://drive.google.com/file/d/1Dg782CooSM6pGwrhVuaJgZRjLsshcv0V/preview", img: "http://drive.google.com/uc?export=view&id=1EDQxnrBTaU5sK2x3RTLrYDJ3JlJOBjKR", current_simulation_text: "Orientation rotated counter clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 5, id: "C22", video: "https://drive.google.com/file/d/1dP4-TyKPrUDP1Z5B2wMU7TAtF1dCKUWT/preview" , img: "http://drive.google.com/uc?export=view&id=17FzttLchJDsvDoj9pOVyKytM-ZvUys7g", current_simulation_text: "Orientation rotated clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 6, id: "C23", video: "https://drive.google.com/file/d/148fvZyFdrf0rm2LGh56cXWhKEkU0MCln/preview" , img: "http://drive.google.com/uc?export=view&id=1a3eskT3e-8wOTvNp2lNrmuwYOMXVk2Vy", current_simulation_text: "Orientation rotated counter clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 7, id: "C24", video: "https://drive.google.com/file/d/1e1F8w_nw__Xdrgp1IwVptivIbK5wypSE/preview", img: "http://drive.google.com/uc?export=view&id=1TOvJQRX5GV-fbD21tOwcded02WPGo6yb", current_simulation_text: "Orientation rotated clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 8, id: "C31", video: "https://drive.google.com/file/d/18sv6JdUhGotlOy1St5UApXOcNSSS0UvY/preview", img: "http://drive.google.com/uc?export=view&id=1KuWABwMqcl7NIjfkffOUDG4DcTFMmmCn", current_simulation_text: "Laser distance lowered by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 9, id: "C32", video: "https://drive.google.com/file/d/14sE-yS_RVjEHN2uYj_98e68-xwcY5d_t/preview" , img: "http://drive.google.com/uc?export=view&id=13bmGnMeSZ_mVjo1xOA9qklRFmGfE3TTT", current_simulation_text: "Laser distance increased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 10, id: "C33", video: "https://drive.google.com/file/d/1LpepFKZVv9B2hZiNLd66evxEk2bQGmp3/preview", img: "http://drive.google.com/uc?export=view&id=1OtW2_LSMoKytYnIFfz-Q-cNNiOrta7A3", current_simulation_text: "Laser shadow filter minimum angle reduced to 0 ", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 11, id: "C34", video: "https://drive.google.com/file/d/1DdVwB0uELM9-5i0TOWsny98AeA6i52o0/preview", img: "http://drive.google.com/uc?export=view&id=1ARkVERMlYIsuO4V51LqLqRtoK3BclXVW", current_simulation_text: "Laser shadow filter maximum angle increased to 180", simulation_type: "detection", starred: false, thumbs_up: false},
            ],
            set_empty:[

            ],
            seenVideos:[
                { index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1Tkq5xH-32hTepBKDz4iMDp8HKXIdXoo-/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
            ],
            current_set: "setA",
            position_number: 0,
            orientation_number: 3, 
            detection_number: 7,
            current_simulation: 0,
            participantOpened: true,
            participant_number: '',
            mod: 0,
            round: 1,
            selectModalOpened: false,
            clearModalOpened: false,
            endModalOpened: false,
            current_seen_vid_index: 0,
            can_access_buttons: true,
        };
        this.handleSimulationClick = this.handleSimulationClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleStar = this.handleStar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleNewSimulation = this.handleNewSimulation.bind(this);
        this.toggleSelectModal = this.toggleSelectModal.bind(this);
        this.toggleClearModal = this.toggleClearModal.bind(this);
        this.setThumbsDown = this.setThumbsDown.bind(this);
        this.setThumbsUp = this.setThumbsUp.bind(this);
    }

    setThumbsDown(){
        let setA = [...this.state[this.state.current_set]];
        let curr = {...setA[this.state.current_simulation]};
        curr.thumbs_up = false;
        setA[this.state.current_simulation] = curr;
        this.setState({[this.state.current_set] : setA});

        let seenVideos = [...this.state.seenVideos];
        let curr_seen = {...seenVideos[this.state.current_seen_vid_index]};
        curr_seen.thumbs_up = false;
        seenVideos[this.state.current_seen_vid_index] = curr_seen;
        this.setState({seenVideos});
        
        this.setState({can_access_buttons: true})
    }
    setThumbsUp(){
        let setA = [...this.state[this.state.current_set]];
        let curr = {...setA[this.state.current_simulation]};
        curr.thumbs_up = true;
        setA[this.state.current_simulation] = curr;
        this.setState({[this.state.current_set] : setA});

        let seenVideos = [...this.state.seenVideos];
        let curr_seen = {...seenVideos[this.state.current_seen_vid_index]};
        curr_seen.thumbs_up = true;
        seenVideos[this.state.current_seen_vid_index] = curr_seen;
        this.setState({seenVideos});

        this.setState({can_access_buttons: true})
    }

    handleSimulationClick(item){
        this.setState({current_simulation: item.index})
        console.log("set simulation to " + item.index);
        this.setState({current_seen_vid_index : item.seenVideosIndex})
        //this.seenVidIndex = this.state.setA[this.state.current_simulation].seenVideosIndex;
        this.setState({can_access_buttons : false})
    }

    handleSelect(){
        console.log("selected simulation " + this.state.current_simulation.id);
        //DO SOMETHING HERE
    }

    handleClear(){
        this.setState({selectModalOpened : false})
        this.setState({clearModalOpened: false})
        
        //if we are on third round, this means we have been through A, B, and C - so don't do anything 
        if(this.state.round == 1){
            let seen = this.state.seenVideos
            console.log("cleared current view");
            if(this.state.mod == 0 || this.state.mod == 3){
                //set to B
                this.setState({ current_set : "setB"})
                seen = [                
                    { index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/1if0uuD-a6ma6Y--TYPxR3mnE8SbCsSri/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
                ]

                this.setState({
                    seenVideos: seen
                })
            }
            else if(this.state.mod == 1 || this.state.mod == 4){
                //set to C
                this.setState({ current_set : "setC"})
                seen = [
                    { index: 0, seenVideosIndex: 0, id: "C11", video: "https://drive.google.com/file/d/1zc_AZFulH8VzaGrZZIR_AlScv7THPI0k/preview", img: "http://drive.google.com/uc?export=view&id=1K5ZbDR7wsnGzxfc7q_uiDixoDRpCJc4r", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                ]

                this.setState({
                    seenVideos: seen
                })
            }
            else{
                //set to A
                this.setState({ current_set : "setA"})
                seen = [
                    { index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1Tkq5xH-32hTepBKDz4iMDp8HKXIdXoo-/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                ]

                this.setState({
                    seenVideos: seen
                })
            }
    
            this.setState({position_number : 0, orientation_number: 3, detection_number: 7, current_simulation : 0})
            this.setState({round : this.state.round + 1})
        }
        else if(this.state.round == 2){
            let seen = this.state.seenVideos
            console.log("cleared current view");
            if(this.state.mod == 2  || this.state.mod == 4){
                //set to B
                this.setState({ current_set : "setB"})
                seen = [                
                    { index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/1if0uuD-a6ma6Y--TYPxR3mnE8SbCsSri/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
                ]

                this.setState({
                    seenVideos: seen
                })
            }
            else if(this.state.mod == 0 || this.state.mod == 5){
                //set to C
                this.setState({ current_set : "setC"})
                seen = [
                    { index: 0, seenVideosIndex: 0, id: "C11", video: "https://drive.google.com/file/d/1zc_AZFulH8VzaGrZZIR_AlScv7THPI0k/preview", img: "http://drive.google.com/uc?export=view&id=1K5ZbDR7wsnGzxfc7q_uiDixoDRpCJc4r", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                ]

                this.setState({
                    seenVideos: seen
                })
            }
            else{
                //set to A
                this.setState({ current_set : "setA"})
                seen = [
                    { index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1Tkq5xH-32hTepBKDz4iMDp8HKXIdXoo-/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                ]

                this.setState({
                    seenVideos: seen
                })
            }
    
            this.setState({position_number : 0, orientation_number: 3, detection_number: 7, current_simulation : 0})
            this.setState({round : this.state.round + 1})
        }
        else{
            //do nothing - we are already on round 3
            this.setState({endModalOpened : true})
        }
    }

    toggleSelectModal(){
        this.setState({selectModalOpened : !this.state.selectModalOpened})
    }

    toggleClearModal(){
        this.setState({clearModalOpened : !this.state.clearModalOpened})
    }

    toggleModal() {
        this.setState(prevState => ({participantOpened: false}));

        let mod = this.state.participant_number % 6;
        console.log("mod ", mod)
        this.setState({mod });
        if(mod == 0 || mod == 4){
            console.log("A")
            //start with A
            let seenVideos = [
                { index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1Tkq5xH-32hTepBKDz4iMDp8HKXIdXoo-/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
            ];
            this.setState({seenVideos})
            this.setState({current_set: "setA"})
        }
        else if(mod == 1 || mod == 5){
            console.log("B")
            //start with B
            let seenVideos = [                
                { index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/1if0uuD-a6ma6Y--TYPxR3mnE8SbCsSri/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
            ]
            this.setState({seenVideos})
            this.setState({current_set: "setB"})
        }
        else if(mod == 2 || mod == 3){
            console.log("C")
            //start with C
            let seenVideos = [
                { index: 0, seenVideosIndex: 0, id: "C11", video: "https://drive.google.com/file/d/1zc_AZFulH8VzaGrZZIR_AlScv7THPI0k/preview", img: "http://drive.google.com/uc?export=view&id=1K5ZbDR7wsnGzxfc7q_uiDixoDRpCJc4r", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
            ]
            this.setState({seenVideos})
            this.setState({current_set: "setC"})
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(){
        var element = document.getElementById("current_sim")
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
    }

    handleStar(id, seenVideosIndex){
        let setA = [...this.state[this.state.current_set]];
        let curr = {...setA[id]};
        curr.starred = !curr.starred;
        setA[id] = curr;
        this.setState({[this.state.current_set] : setA});

        let seenVideos = [...this.state.seenVideos];
        let curr_seen = {...seenVideos[seenVideosIndex]};
        curr_seen.starred = !curr_seen.starred;
        seenVideos[seenVideosIndex] = curr_seen;
        this.setState({seenVideos});
    }

    handleChange(event) {
        this.setState({participant_number: event.target.value})
      }

    handleNewSimulation(type_of_simulation){
        if(this.state.can_access_buttons){
            let index = 0;
            if(type_of_simulation == "position"){
                //generate new position simulation
                if(this.state.position_number < 3){
                    index = this.state.position_number + 1;
                    this.setState({ position_number: index })
                }
                else{
                    return;
                }
            }
            else if(type_of_simulation == "orientation"){
                //generate new orientation simulation
                if(this.state.orientation_number < 7){
                    index = this.state.orientation_number + 1;
                    this.setState({ orientation_number: index })
                }
                else{
                    return;
                }
            }
            else{
                //generate new detection simulation
                if(this.state.detection_number < 11){
                    index = this.state.detection_number + 1;
                    this.setState({ detection_number: index })
                }
                else{
                    return;
                }
            }
            this.setState({current_simulation: index})
            
            let setA = [...this.state[this.state.current_set]];
            let curr = {...setA[index]};
            curr.seenVideosIndex = this.state.seenVideos.length;
            this.setState({
                seenVideos: this.state.seenVideos.concat(curr)
            })

            setA[index] = curr
            this.setState({ [this.state.current_set] : setA});

            this.state.seenVidIndex = curr.seenVideosIndex;
            this.state.current_seen_vid_index = curr.seenVideosIndex;
            this.setState({can_access_buttons: false})
        }
    }

    render() {
        let itemList = this.state.seenVideos.map(item => {
            return (
                <div onClick={() => this.handleSimulationClick(item)} className="card_item" key={item.id} id={item.index == this.state.current_simulation ? "current_sim" : "not_current_sim"}> 
                    <div className="relative" id={item.index == this.state.current_simulation ? "current" : "not_current"}>
                        <img className="item_starred" onClick={() => this.handleStar(item.index, item.seenVideosIndex)} src={item.starred ? star_filled : star}/>
                        {/*<iframe className="card_image" src={item.video} id={item.id == this.state.current_simulation ? "selected" : "not_selected"}></iframe> */}
                        {/*<img className="card_image" id={item.index == this.state.current_simulation ? "selected" : "not_selected"} src={item.img} alt="Screenshot" /> */}
                        <img className="card_image" id={item.thumbs_up ? "not_selected" : "selected"} src={item.img} alt="Screenshot" />
                    </div>
                      <div className="text_descr">{item.current_simulation_text}</div>
                      <hr className="solid" id={item.simulation_type}></hr>
                </div>
            )
        })
return (
    <div className="App">
        <Modal className="modal"
          isOpen={this.state.participantOpened}>
              Enter Participant Number:   
          <input onChange={this.handleChange.bind(this)} value={this.state.participant_number} />
          <button onClick={() => this.toggleModal()}> Submit </button>
        </Modal>
        <Modal className="modal"
          isOpen={this.state.selectModalOpened}>
              You are about to select the current alternative as the most suitable one. Are you sure about that?
              <button onClick={() => this.handleClear()}> Yes </button>
              <button onClick={() => this.toggleSelectModal()}> Go Back </button>
        </Modal>
        <Modal className="modal"
          isOpen={this.state.clearModalOpened}>
              Are you sure you want to quit?
              <button onClick={() => this.handleClear()}> Yes </button>
              <button onClick={() => this.toggleClearModal()}> Go Back </button>
        </Modal>
        <Modal className="modal"
          isOpen={this.state.endModalOpened}>
              You have completed the session. Thank you!
        </Modal>
        <div className="topHalf">
            <div className="mainSection">
                <div className="topHeader"> 
                    <div>current view of failure: {this.state.current_set} </div>
                    <div className="clear">
                        <img src={this.state[this.state.current_set][this.state.current_simulation].starred ? star_filled : star} alt="save" onClick={() => this.handleStar(this.state.current_simulation, this.state[this.state.current_set][this.state.current_simulation].seenVideosIndex)}/>
                    </div> 
                </div>
                <div className="mainVideo">
                    <iframe allow="autoplay" src={this.state[this.state.current_set][this.state.current_simulation].video}></iframe> 
                    {/*<img src={this.state.items[this.state.current_simulation].img} alt="Screenshot" />*/}
                </div>
            </div>
            <div className="verticalSection">
                <div className="zoomVideo">
                    <img src={zoom} alt="Zoom" />
                </div>
                <div className="simulateSection">
                    <div className="header"> simulate alternate behavior </div>
                    <div className="simulateChoices">
                        <div className="choice">
                            <img className="first" id={(this.state.position_number == 3 || !this.state.can_access_buttons) ? "disable" : "none"} onClick={() => this.handleNewSimulation("position")} src={position} />
                            <div className="label" id={(this.state.position_number == 3 || !this.state.can_access_buttons) ? "disable" : "none"}>Robot position </div>
                        </div>
                        <div className="choice">
                            <img className="second" id={(this.state.orientation_number == 7 || !this.state.can_access_buttons) ? "disable" : "none"} onClick={() => this.handleNewSimulation("orientation")} src={orientation}  />
                            <div className="label" id={(this.state.orientation_number == 7 || !this.state.can_access_buttons) ? "disable" : "none"}>Robot orientation </div>
                        </div>
                        <div className="choice">
                            <img className="third" id={(this.state.detection_number == 11 || !this.state.can_access_buttons) ? "disable" : "none"} onClick={() => this.handleNewSimulation("detection")} src={detection}  />
                            <div className="label" id={(this.state.detection_number == 11 || !this.state.can_access_buttons) ? "disable" : "none"}>Obstacle detection </div>
                        </div>
                    </div>
                </div>
                <div className="thumbs_up_down">
                    <div className="header"> choose improvement </div>
                    <div className="choose_improvement">
                        <div>is this simulation closer to the desired outcome?</div>
                        <div className="row">
                            <div className="quit" id={this.state.can_access_buttons ? "disable" : "none"} onClick={() => this.setThumbsDown()}>No &gt; </div>
                            <div className="select" id={this.state.can_access_buttons ? "disable" : "none"} onClick={() => this.setThumbsUp()}>Yes &gt; </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="bottomHalf">
              <div className="scrollView">
                  <section className="card">
                      {itemList}
                  </section>
              </div>
              <div className="currentSimulationView">
                  <div className="header"> select or quit </div>
                  <div className="selectSimulation">
                      {/*<div>{this.state[this.state.current_set][this.state.current_simulation].current_simulation_text}</div>*/}
                      <div className="quit" onClick={() => this.toggleClearModal()}>I cannot find the correct simulation. Quit &gt; </div>
                      <div className="select" onClick={() => this.toggleSelectModal()}> I have found the correct simulation. Select &gt; </div>
                  </div>
              </div>
          </div>
        </div>);
    }
}

export default App;
