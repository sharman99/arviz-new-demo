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
            
                { index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1irSWT-p-Y4sYnPPLgr0nLEsy__dM483U/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 1, id: "A12", video: "https://drive.google.com/file/d/1boj2VJ4T1W-GglZz5el6sA8koYzTWsDQ/preview", img: "http://drive.google.com/uc?export=view&id=1ytCzRjlIXNJ_sVlg7X-txV5m5crXyrSQ", current_simulation_text: "Position translated -5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 2, id: "A13", video: "https://drive.google.com/file/d/1eC768JJgr1isYx8YtnO8OESyURv_vFhh/preview", img: "http://drive.google.com/uc?export=view&id=1KT52NC0pGb0QxUBAcYc4POVVeTiXIFg4", current_simulation_text: "Position translated +5 cm along the y axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 3, id: "A14", video: "https://drive.google.com/file/d/1B68YSbD3KmccuRi0hMQ5rKHMa8hTv8bL/preview", img: "http://drive.google.com/uc?export=view&id=1HXc_Jf3XYbs9HnkJNodW3daIMVtTcxfP", current_simulation_text: "Position translated -5 cm along the y axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 4, id: "A21", video: "https://drive.google.com/file/d/1aeydz8Z-emta5PTUxAoUj2MlnxnO2lkg/preview", img: "http://drive.google.com/uc?export=view&id=1pQlWarYHPneCW_cd4yzTbp85GDl8NZOM", current_simulation_text: "Rotated counter clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 5, id: "A22", video: "https://drive.google.com/file/d/15X6EIqlVD1buBA_1s74n0erexuSxTul9/preview", img: "http://drive.google.com/uc?export=view&id=12gxBuYCXOVTRJovqyADRQkfmPNRvykIK", current_simulation_text: "Rotated clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 6, id: "A23", video: "https://drive.google.com/file/d/1RQimMx2AhpHJQbW4jOxgOuglXcwazEHj/preview", img: "http://drive.google.com/uc?export=view&id=1zAJHLBzjRP7rt8yPGZeVK1GyRwB4J5pw", current_simulation_text: "Rotated counter clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 7, id: "A24", video: "https://drive.google.com/file/d/1MxjRC6O1qXR6aRRsgkmVFsBHhLFpojmS/preview", img: "http://drive.google.com/uc?export=view&id=1reTBwM5PBYXg_CuLRIrCA6Ilq7iC5igA", current_simulation_text: "Rotated clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 8, id: "A31", video: "https://drive.google.com/file/d/1aALHfPZnFzBz6tFfT4OAbd6OjDj6dMSr/preview", img: "http://drive.google.com/uc?export=view&id=1js12WZjGoSdMNitq_JXrA3_WFoFaR3Eb", current_simulation_text: "Laser distance decreased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 9, id: "A32", video: "https://drive.google.com/file/d/17D-PINgaCwS5BzGJqD9zVpOMMWXRRb5D/preview" , img: "http://drive.google.com/uc?export=view&id=13YZnvqOLN-8cbSx1fSOMJACgJuB0gcYi", current_simulation_text: "Laser distance increased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 10, id: "A33", video: "https://drive.google.com/file/d/1yxb04XWcm0vVTJ201Vu-THLUVyvmbYWR/preview", img: "http://drive.google.com/uc?export=view&id=154ClLxBAwwM-herWPNTE4AaHSmOZ3G_z", current_simulation_text: "Laser intensity threshold increased to 100 ", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 11, id: "A34", video: "https://drive.google.com/file/d/13MkELaBwVXL9I86VEIWghz7QvW7iFCN4/preview", img: "http://drive.google.com/uc?export=view&id=156RyjzLiPoTwMud1gS0-449kt0S6I-tF", current_simulation_text: "Laser outlier threshold increased to 50 cm", simulation_type: "detection", starred: false, thumbs_up: false},
            ],
            setB:[
                { index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/16PnbsdHTkyUVpahwBbLpwmXpfSrGWpyf/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 1, id: "B12", video: "https://drive.google.com/file/d/1zD38BDYuJ-jOKNgXeWFdOTEXHe7RyD4w/preview", img: "http://drive.google.com/uc?export=view&id=1G9isdVDI_jaxGVWnvBgaUwlBzKtSF3mJ", current_simulation_text: "Second position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 2, id: "B13", video: "https://drive.google.com/file/d/1ffBmyI2epmDSf2QEYYjbU9fHJ85rpVJe/preview", img: "http://drive.google.com/uc?export=view&id=1MFY5xc4OTK_NkKSeBkE599hvRjRWBiSW", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 3, id: "B14", video: "https://drive.google.com/file/d/1jM7SKDE1UUnBzIZbwkd46EpVtRVeLx_V/preview", img: "http://drive.google.com/uc?export=view&id=1COM1pY5pbPPSiul8uUNc6D7fa8rsjRf3", current_simulation_text: "Position translated -5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 4, id: "B21", video: "https://drive.google.com/file/d/15fP2QFJY4M0aQFAzBhNXMHqb-Pt6aPUq/preview" , img: "http://drive.google.com/uc?export=view&id=17D6OGC36BgaiY9XDkGN_iEw_TQYCWfqC", current_simulation_text: "Rotated counter clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 5, id: "B22", video: "https://drive.google.com/file/d/1s_deHnpLn10uFnj0WtVm28SgouFnWoDP/preview", img: "http://drive.google.com/uc?export=view&id=1oY7o3ViKkY79IowQkim7umaVs9VaWUCN", current_simulation_text: "Rotated clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 6, id: "B23", video: "https://drive.google.com/file/d/1M8jBktj6OY7PHUUDQI-B0lAY5C9OOqXU/preview", img: "http://drive.google.com/uc?export=view&id=1HpbFSs9jm_S5bRMy7I2DqrTPcdYuu-h_", current_simulation_text: "Rotated counter clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 7, id: "B24", video: "https://drive.google.com/file/d/1oW7npqUU26OSXPYkDhYt5UUYCje-zi9j/preview" , img: "http://drive.google.com/uc?export=view&id=1LPFBnSFdXoFe3gvigaUiHrgQj7eDqYrs", current_simulation_text: "Rotated clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 8, id: "B31", video: "https://drive.google.com/file/d/1ZzN1lYO4VX9ZXkf8p3A4fVD8quUSka2m/preview", img: "http://drive.google.com/uc?export=view&id=1zOU0FpL1CgLeSsNw_1sE6MF0DU9QsN0z", current_simulation_text: "Laser distance decreased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 9, id: "B32", video: "https://drive.google.com/file/d/10nFdxYraR0Sqns7hbYKxzjg2UNU2bY4g/preview" , img: "http://drive.google.com/uc?export=view&id=1WTmwT_h18U-rTdSkirOdjSjNsV6Y_hf7", current_simulation_text: "Laser distance increased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 10, id: "B33", video: "https://drive.google.com/file/d/12y7CCv4CpiRQHw7CC6_Rf55a2WfD8nM1/preview", img: "http://drive.google.com/uc?export=view&id=1WvgjqmTE_fxz1AGbcPTV1517z5W26Vqa", current_simulation_text: "Laser shadow filter angle reduced to 0 ", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 11, id: "B34", video: "https://drive.google.com/file/d/1yBvT0Tw50yQHmkY7afu84wa5s00FycYx/preview" , img: "http://drive.google.com/uc?export=view&id=12vLvqWdWWRJ6pjRa0fSd603jkcohwTOZ", current_simulation_text: "Laser shadow filter angle increased to 180", simulation_type: "detection", starred: false, thumbs_up: false},
            ],
            setC:[
                { index: 0, seenVideosIndex: 0, id: "C11", video: "https://drive.google.com/file/d/1ZM0BYVLPx_BHobcMexgH_bn53sbCUdd9/preview", img: "http://drive.google.com/uc?export=view&id=1K5ZbDR7wsnGzxfc7q_uiDixoDRpCJc4r", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 1, id: "C12", video: "https://drive.google.com/file/d/121DGfvfAT5ip3fhJs84VaBZK1laAIN7u/preview" , img: "http://drive.google.com/uc?export=view&id=1UktyKS48CawgQW7AXpd0423g73zrfI6V", current_simulation_text: "Position translated -5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 2, id: "C13", video: "https://drive.google.com/file/d/1WLxA0aQfCF__VwrTV92QlnSfVRePbP6d/preview", img: "http://drive.google.com/uc?export=view&id=1CLVw3hL8JJt7zY4k5THZuqpIofGG79pC", current_simulation_text: "Position translated +5 cm along the y axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 3, id: "C14", video: "https://drive.google.com/file/d/1z2_gAwnJiHIrinOuGJkXL4VKd7cNH77O/preview", img: "http://drive.google.com/uc?export=view&id=1SciueHVGCWweJEIn-atnrlSbQjDzpWq0", current_simulation_text: "Position translated -5 cm along the y axis", simulation_type: "position", starred: false, thumbs_up: false},
                { index: 4, id: "C21", video: "https://drive.google.com/file/d/1I89x3YLQFgsMui8k4_uIoLVM2zFAQUlG/preview", img: "http://drive.google.com/uc?export=view&id=1EDQxnrBTaU5sK2x3RTLrYDJ3JlJOBjKR", current_simulation_text: "Rotated counter clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 5, id: "C22", video: "https://drive.google.com/file/d/1ldPcM76k371rHMg9Oy96Z0lcBt5BLzvj/preview" , img: "http://drive.google.com/uc?export=view&id=17FzttLchJDsvDoj9pOVyKytM-ZvUys7g", current_simulation_text: "Rotated clockwise by 5 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 6, id: "C23", video: "https://drive.google.com/file/d/1wGQOZpP_sFC5e7yo65Ng9o3A3OgzB0CN/preview" , img: "http://drive.google.com/uc?export=view&id=1a3eskT3e-8wOTvNp2lNrmuwYOMXVk2Vy", current_simulation_text: "Rotated counter clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 7, id: "C24", video: "https://drive.google.com/file/d/167hQKsgCqLbxLHYECIv1s_zeG_U76fjt/preview", img: "http://drive.google.com/uc?export=view&id=1TOvJQRX5GV-fbD21tOwcded02WPGo6yb", current_simulation_text: "Rotated clockwise by 10 degrees", simulation_type: "orientation", starred: false, thumbs_up: false},
                { index: 8, id: "C31", video: "https://drive.google.com/file/d/14xBkANFpyWLFXHrWZT2PT5205vU3v4gw/preview", img: "http://drive.google.com/uc?export=view&id=1KuWABwMqcl7NIjfkffOUDG4DcTFMmmCn", current_simulation_text: "Laser distance decreased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 9, id: "C32", video: "https://drive.google.com/file/d/1116DBi9s0WnktIvb_8RJiiLdauos4DFw/preview" , img: "http://drive.google.com/uc?export=view&id=13bmGnMeSZ_mVjo1xOA9qklRFmGfE3TTT", current_simulation_text: "Laser distance increased by 2.5 cm", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 10, id: "C33", video: "https://drive.google.com/file/d/19jOTx_SalJuNFH_rrfYtVFKIqr3ltcdF/preview", img: "http://drive.google.com/uc?export=view&id=1OtW2_LSMoKytYnIFfz-Q-cNNiOrta7A3", current_simulation_text: "Laser shadow filter angle reduced to 0 ", simulation_type: "detection", starred: false, thumbs_up: false},
                { index: 11, id: "C34", video: "https://drive.google.com/file/d/1SjPVplHtFz_bT9wVIFb3B7Qiq1IF5wX_/preview", img: "http://drive.google.com/uc?export=view&id=1ARkVERMlYIsuO4V51LqLqRtoK3BclXVW", current_simulation_text: "Laser shadow filter angle increased to 180", simulation_type: "detection", starred: false, thumbs_up: false},
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
        if(this.state.round === 1){
            let seen = this.state.seenVideos
            console.log("cleared current view");
            if(this.state.mod === 0 || this.state.mod === 3){
                //set to B
                this.setState({ current_set : "setB"})
                seen = [                
                    { index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/1if0uuD-a6ma6Y--TYPxR3mnE8SbCsSri/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
                ]

                this.setState({
                    seenVideos: seen
                })
            }
            else if(this.state.mod === 1 || this.state.mod === 4){
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
        else if(this.state.round === 2){
            let seen = this.state.seenVideos
            console.log("cleared current view");
            if(this.state.mod === 2  || this.state.mod === 4){
                //set to B
                this.setState({ current_set : "setB"})
                seen = [                
                    { index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/1if0uuD-a6ma6Y--TYPxR3mnE8SbCsSri/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
                ]

                this.setState({
                    seenVideos: seen
                })
            }
            else if(this.state.mod === 0 || this.state.mod === 5){
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

        this.setState({can_access_buttons: true})
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
        if(mod === 0 || mod === 4){
            console.log("A")
            //start with A
            let seenVideos = [
                { index: 0, seenVideosIndex: 0, id: "A11", video: "https://drive.google.com/file/d/1Tkq5xH-32hTepBKDz4iMDp8HKXIdXoo-/preview", img: "http://drive.google.com/uc?export=view&id=1Qw4M-dnvFL-XQJy3bddVUjohgc5S28k5", current_simulation_text: "Position translated +5 cm along the x axis", simulation_type: "position", starred: false, thumbs_up: false},
            ];
            this.setState({seenVideos})
            this.setState({current_set: "setA"})
        }
        else if(mod === 1 || mod === 5){
            console.log("B")
            //start with B
            let seenVideos = [                
                { index: 0, seenVideosIndex: 0, id: "B11", video: "https://drive.google.com/file/d/1if0uuD-a6ma6Y--TYPxR3mnE8SbCsSri/preview", img: "http://drive.google.com/uc?export=view&id=1bnU3kBSn2UW0c20qLbf5NVJB_c9tDMiw", current_simulation_text: "First position alternative selected based on landmarks", simulation_type: "position", starred: false, thumbs_up: false},
            ]
            this.setState({seenVideos})
            this.setState({current_set: "setB"})
        }
        else if(mod === 2 || mod === 3){
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
            if(type_of_simulation === "position"){
                //generate new position simulation
                if(this.state.position_number < 3){
                    index = this.state.position_number + 1;
                    this.setState({ position_number: index })
                }
                else{
                    return;
                }
            }
            else if(type_of_simulation === "orientation"){
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
            console.log("current_simulation: " + index);
            
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
                <div onClick={() => this.handleSimulationClick(item)} className="card_item" key={item.id} id={item.index === this.state.current_simulation ? "current_sim" : "not_current_sim"}> 
                    <div className="relative" id={item.index === this.state.current_simulation ? "current" : "not_current"}>
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
              <div> Enter Participant Number: </div>
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
              <div> Are you sure you want to quit? </div>
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
                    <div>Current simulated outcome</div>
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
                    <div className="header"> Generate alternate outcomes </div>
                    <div className="simulateChoices" id={(!this.state.can_access_buttons) ? "deactive" : "active"}>
                        <div className="choice">
                            <img className="first" id={(this.state.position_number === 3 || !this.state.can_access_buttons) ? "disable" : "none"} onClick={() => this.handleNewSimulation("position")} src={position} />
                            <div className="label" id={(this.state.position_number === 3 || !this.state.can_access_buttons) ? "disable" : "none"}>Robot position </div>
                        </div>
                        <div className="choice">
                            <img className="second" id={(this.state.orientation_number === 7 || !this.state.can_access_buttons) ? "disable" : "none"} onClick={() => this.handleNewSimulation("orientation")} src={orientation}  />
                            <div className="label" id={(this.state.orientation_number === 7 || !this.state.can_access_buttons) ? "disable" : "none"}>Robot orientation </div>
                        </div>
                        <div className="choice">
                            <img className="third" id={(this.state.detection_number === 11 || !this.state.can_access_buttons) ? "disable" : "none"} onClick={() => this.handleNewSimulation("detection")} src={detection}  />
                            <div className="label" id={(this.state.detection_number === 11 || !this.state.can_access_buttons) ? "disable" : "none"}>Obstacle detection </div>
                        </div>
                    </div>
                </div>
                <div className="thumbs_up_down">
                    <div className="choose_improvement" id={this.state.can_access_buttons ? "deactive" : "active"}>
                        <div className="question" id={this.state.can_access_buttons ? "disable" : "none"}>Is this outcome better?</div>
                        <div className="row">
                            <div className="quit" id={this.state.can_access_buttons ? "disable" : "none"} onClick={() => this.setThumbsDown()}>No </div>
                            <div className="select" id={this.state.can_access_buttons ? "disable" : "none"} onClick={() => this.setThumbsUp()}>Yes </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="bottomHalf">
              <div className="historyView">
                <div className="header"> Simulation history </div>
                <div className="scrollView">
                    <section className="card">
                        {itemList}
                    </section>
                </div>
              </div>
              <div className="currentSimulationView">
                  <div className="header"> Proceed to the next scenario </div>
                  <div className="selectSimulation">
                      {/*<div>{this.state[this.state.current_set][this.state.current_simulation].current_simulation_text}</div>*/}
                      <div className="finalQuestion"> Did you find a better alternative outcome that&#39;s currently playing</div>
                      <div className="quit" onClick={() => this.toggleClearModal()}>No, I quit! :( </div>
                      <div className="select" onClick={() => this.toggleSelectModal()}> Yes, let&#39;s go!</div>
                  </div>
              </div>
          </div>
        </div>);
    }
}

export default App;
