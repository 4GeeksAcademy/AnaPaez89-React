import React from "react";

export const BarraProgreso = () => {
    return (
        <div className="container">
            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar text-bg-warning" style={{width: `75%`}}>75%</div>
            </div> 
            <div class="progress m-1" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar text-bg-primary" style={{width: `35%`}}>35%</div>
            </div> 
            <div class="progress m-1" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar text-bg-secondary" style={{width: `47%`}}>47%</div>
            </div>  
            <div class="progress m-1" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar text-bg-success" style={{width: `10%`}}>10%</div>
            </div> 
        </div>


    )
}