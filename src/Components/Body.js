import "./Body.css";
import {useState} from 'react';
export default function Body(){
    
    let [number,setNumber]=useState(true);
    let [smallLetters,setSmallLetter]=useState(true);
    let [upperLetters,setCapitalLetters]=useState(true);
    let [specialChar,setSpecialChar]=useState(true);
    let [password,setPassword]=useState("");
    let [length,setLength]=useState(5);

    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallCase="abcdefghijklmnopqrstuvwxyz";
    let digits="0123456789";
    let special="!@#$%&*";
    function generatePass(){
        setPassword("");
        let arr=[];
        
        if(upperLetters){
            arr.push(upperCase);
        }
        if(smallLetters){
            arr.push(smallCase);
        }
        if(specialChar){
            arr.push(special);
        }
        if(number){
            arr.push(digits);
        }
        if(arr.length===0){
            alert("Select atleast one checkbox")
            return;
        }
        let arr2=arr.map((ele)=>{
            return false;
        });

        while(arr2.includes(false)){
            let randomNum=(Math.floor(Math.random()*arr.length));
            if(!arr2[randomNum]){
                let num=arr[randomNum];
                let randomIndex=Math.floor(Math.random()*num.length);
                setPassword((prevPassword)=>{
                    let updatedPassword=prevPassword+ num[randomIndex];
                    return updatedPassword;
                })
                arr2[randomNum] = true;
            }
        }
        
        for(let i = 0; i < length; i++){
            let randomNumber = (Math.floor(Math.random() * arr.length));
            let selectedSet = arr[randomNumber]; 
            let anotherRandomNumber = (Math.floor(Math.random() * selectedSet.length));
            setPassword((prevPassword) => {
              let updatedPassword = prevPassword + selectedSet[anotherRandomNumber];
              console.log(updatedPassword);
              return updatedPassword;
            });
        }
    }
    function lengthChange(e){
        setLength(e.target.value); 
    }
    function copyPass(){
        navigator.clipboard.writeText(password);
        alert("Password successfully copied!!");
    }
    return(
        <main>
            <div className="section1">
                <div className="subSect1">
                    <label htmlFor="passlength">Length</label>
                    <input type="number" value={length} onChange={lengthChange} className="lengthInput" />
                </div>
                <input type="range" value={length} min="5" max="20" step="1" onChange={lengthChange} className="rangeRoller" />
            </div>

            <div className="section2">
                <div className="subsec2">
                    <input type="checkbox" name="Numbers" checked={number} onChange={()=>{
                        setNumber(!number) 
                    }} />
                    <label htmlFor="Numbers">Numbers(0-9)</label>
                </div>

                <div className="subsec2">
                    <input type="checkbox" name="SmallLetters" checked={smallLetters} onChange={()=>{
                        setSmallLetter(!smallLetters);
                    }} />
                    <label htmlFor="SmallLetters">Small Letters(a-z)</label>
                </div>

                <div className="subsec2">
                    <input type="checkbox" name="CapitalLetters" checked={upperLetters} onChange={()=>{
                        setCapitalLetters(!upperLetters);
                    }} />
                    <label htmlFor="CapitalLetters">Capital Letters(A-Z)</label>
                </div>

                <div className="subsec2">
                    <input type="checkbox" name="SpecialChara" checked={specialChar} onChange={()=>{
                        setSpecialChar(!specialChar);
                    }} />
                    <label htmlFor="SpecialChara">Special Characters(!#$%&@...)</label>
                </div>
            </div>
            
            <div className="submit">
                <button className="generate" onClick={generatePass}>Generate</button>
                <div className="output">
                    <input type="text" value={password} className="outputDisplay" disabled />
                    <div className="copyIcon" onClick={copyPass}>  
                        <i class="fa-solid fa-copy"></i>
                    </div>
                </div>
            </div> 
        </main>
    )
}
