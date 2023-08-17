$(document).ready(function() {
	
	$(".se-pre-con1").show();
	$("#ProgressMessage").html("Loading Page .. ");
	
	document.querySelector("#inp-given").innerText = localStorage.getItem("inp-given");
	document.querySelector("#given-unit").innerText = localStorage.getItem("given-unit");
	document.querySelector("#out-req").innerText = localStorage.getItem("out-req");
	document.querySelector("#req-unit").innerText = localStorage.getItem("req-unit");
	
	util.makeDD("m-prefix-1",PrefixData, "0");
	util.makeDD("m-prefix-2",PrefixData, "0");
	
	util.makeDD("t-prefix-1",PrefixData, "0");
	util.makeDD("t-prefix-2",PrefixData, "0");
	
	util.makeDD("l-prefix-1",PrefixData, "0");
	util.makeDD("l-prefix-2",PrefixData, "0");
	
	util.makeDD("tp-prefix-1",PrefixData, "0");
	util.makeDD("tp-prefix-2",PrefixData, "0");
	
	util.makeDD("e-prefix-1",PrefixData, "0");
	util.makeDD("e-prefix-2",PrefixData, "0");
	
	util.makeDD("p-prefix-1",PrefixData, "0");
	util.makeDD("p-prefix-2",PrefixData, "0");
	
	util.makeDD("f-prefix-1",PrefixData, "0");
	util.makeDD("f-prefix-2",PrefixData, "0");
	
	util.makeDD("pr-prefix-1",PrefixData, "0");
	util.makeDD("pr-prefix-2",PrefixData, "0");
	
	util.makeDD("to-prefix-1",PrefixData, "0");
	util.makeDD("to-prefix-2",PrefixData, "0");
	
	util.makeDD("a-prefix-1",PrefixData, "0");
	util.makeDD("a-prefix-2",PrefixData, "0");
	
	util.makeDD("v-prefix-1",PrefixData, "0");
	util.makeDD("v-prefix-2",PrefixData, "0");
	
	util.makeDD("ve-prefix-1",PrefixData, "0");
	util.makeDD("ve-prefix-2",PrefixData, "0");
	
	util.makeDD("ac-prefix-1",PrefixData, "0");
	util.makeDD("ac-prefix-2",PrefixData, "0");
	
	util.makeDD("DV-prefix-1",PrefixData, "0");
	util.makeDD("DV-prefix-2",PrefixData, "0");
	
	util.makeDD("KV-prefix-1",PrefixData, "0");
	util.makeDD("KV-prefix-2",PrefixData, "0");
	
	util.makeDD("C-prefix-1",PrefixData, "0");
	util.makeDD("C-prefix-2",PrefixData, "0");
	
	util.makeDD("Cu-prefix-1",PrefixData, "0");
	util.makeDD("Cu-prefix-2",PrefixData, "0");
	
	util.makeDD("Lu-prefix-1",PrefixData, "0");
	util.makeDD("Lu-prefix-2",PrefixData, "0");
	
	util.makeDD("AOS-prefix-1",PrefixData, "0");
	util.makeDD("AOS-prefix-2",PrefixData, "0");
	
	util.makeDD("mass-given",UnitsData.mass,"1");
	util.makeDD("mass-req",UnitsData.mass,"1");
	
	util.makeDD("time-given",UnitsData.time,"1");
	util.makeDD("time-req",UnitsData.time,"1");
	
	util.makeDD("length-given",UnitsData.len,"1");
	util.makeDD("length-req",UnitsData.len,"1");
	
	util.makeDD("temperature-given",UnitsData.temperature,"1");
	util.makeDD("temperature-req",UnitsData.temperature,"1");
	
	util.makeDD("energy-given",UnitsData.energy,"1");
	util.makeDD("energy-req",UnitsData.energy,"1");
	
	util.makeDD("Power-given",UnitsData.power,"1");
	util.makeDD("Power-req",UnitsData.power,"1");
	
	util.makeDD("Force-given",UnitsData.force,"1");
	util.makeDD("Force-req",UnitsData.force,"1");
	
	util.makeDD("Pressure-given",UnitsData.pressure,"1");
	util.makeDD("Pressure-req",UnitsData.pressure,"1");
	
	util.makeDD("Torque-given",UnitsData.torque,"1");
	util.makeDD("Torque-req",UnitsData.torque,"1");
	
	util.makeDD("Area-given",UnitsData.area,"1");
	util.makeDD("Area-req",UnitsData.area,"1");
	
	util.makeDD("Volume-given",UnitsData.volume,"1");
	util.makeDD("Volume-req",UnitsData.volume,"1");
	
	util.makeDD("Velocity-given",UnitsData.velocity,"1");
	util.makeDD("Velocity-req",UnitsData.velocity,"1");
	
	util.makeDD("Acceleration-given",UnitsData.acceleration,"1");
	util.makeDD("Acceleration-req",UnitsData.acceleration,"1");
	
	util.makeDD("Dynamic-given",UnitsData.dynamic_viscocity,"1.0");
	util.makeDD("Dynamic-req",UnitsData.dynamic_viscocity,"1.0");
	
	util.makeDD("Kinematic-given",UnitsData.kinematic_viscocity,"1");
	util.makeDD("Kinematic-req",UnitsData.kinematic_viscocity,"1");
	
	util.makeDD("Charge-given",UnitsData.charge,"1");
	util.makeDD("Charge-req",UnitsData.charge,"1");
	
	util.makeDD("Current-given",UnitsData.current,"1.0");
	util.makeDD("Current-req",UnitsData.current,"1.0");
	
	util.makeDD("Luminous-given",UnitsData.luminous_intensity,"1.0");
	util.makeDD("Luminous-req",UnitsData.luminous_intensity,"1.0");
	
	util.makeDD("Amount-given",UnitsData.amount_of_substance,"1");
	util.makeDD("Amount-req",UnitsData.amount_of_substance,"1");
	
	$(".se-pre-con1").hide();
	
	if(localStorage.getItem("back-envelope.com/convertQuantity") != null && localStorage.getItem("back-envelope.com/convertQuantity") !== undefined){
		var index = localStorage.getItem("back-envelope.com/convertQuantity");
		loadConvertQuantity(index);
	}
});


function sendValuesToPage2() {
    saveToData();
    window.location.replace("page2.php");
}

function saveToData() {
    var significantRows = [];
    var reference = "";
    var description = "";
    var overallQuantity = $("#inp-given").val();
    var overallOut = $("#out-req").val();

    var dataRow = [];
    var variablesData = getVariablesFromPage2();

	var row = {
		name: GetVariableName(),
		reference: "",
		description: "",
		magnitude_in: overallQuantity,
		magnitude_out: overallOut,
		units: "",
		detail: [],
		page1: true
	};
	
    document.querySelectorAll(".unit-p-individual").forEach((thisUnitP) => {
        if (thisUnitP.value != "" && thisUnitP.value != null) {
			var newDetail = PrepareDataForCalculation(thisUnitP);
			row.detail.push(newDetail);
			
			row.units += newDetail.unitReqIndividual;
			row.detail = row.detail.sort((a,b)=>{ return b.unitPIndividual-a.unitPIndividual; });
        }
    });
	
	if(row.detail.length > 0){
		variablesData.push(row);
	}

    SetVariablesInSessionAgain(variablesData);
    return variablesData.length;
}



function clearInputs() {
    document.querySelector("#inp-given").value = null;
    document.querySelector("#given-unit").value = null;
    document.querySelector("#out-req").value = null;
    document.querySelector("#req-unit").value = null;
    localStorage.removeItem("inp-given");
    localStorage.removeItem("given-unit");
    localStorage.removeItem("out-req");
    localStorage.removeItem("req-unit");
    localStorage.removeItem("req-unit-values", unitreqv);
    localStorage.removeItem("given-unit-values", unitgivenv);
    document.querySelectorAll("select").forEach((thisSelect) => {
        if (thisSelect.querySelector("option[selected]") != null) {
            thisSelect.value = thisSelect.querySelector("option[selected]").value;
        }
    });
    document.querySelectorAll("input[type=number]").forEach((thisNumber) => {
        thisNumber.value = "";
    });
    document.querySelector("#mass2").value = 0;
    document.querySelector("#time2").value = 0;
    document.querySelector("#length2").value = 0;
    document.querySelector("#temperature2").value = 0;
    document.getElementById("out-req").value = (0).toPrecision(15).toUpperCase();
}


function getMagnitude(index) {
    var variablesData = getVariablesFromPage2();
    var magnitude = 0;
    var magnitudes = 1;
    if(variablesData[index] !== undefined){
        var row = variablesData[index];
        if (row !== undefined) {
            var details = row.detail;
			$.map(details, function(thisQuantity, i){
				var prefixGiven = thisQuantity.unitPrefix1Individual;
				if (prefixGiven == null || prefixGiven === undefined || prefixGiven == "")
					prefixGiven = 0;
				else
					prefixGiven = parseFloat(prefixGiven);

				var unitGiven = thisQuantity.unitGivenIndividual;
				if (unitGiven == null || unitGiven === undefined || unitGiven == "")
					unitGiven = 0;
				else
					unitGiven = parseFloat(unitGiven);

				if (power == null || power === undefined || power == "")
					power = 0;
				else
					power = parseFloat(power);


				var power = thisQuantity.unitPIndividual;
				if (power == null || power === undefined || power == "")
					power = 0;
				else
					power = parseFloat(power);

				var prefixReq = thisQuantity.unitPrefix2Individual;
				if (prefixReq == null || prefixReq === undefined || prefixReq == "")
					prefixReq = 0;
				else
					prefixReq = parseFloat(prefixReq);

				var unitReq = thisQuantity.unitReqIndividual;
				if (unitReq == null || unitReq === undefined || unitReq == "")
					unitReq = 0;
				else
					unitReq = parseFloat(unitReq);

				magnitude = (((10 ** prefixGiven) * unitGiven) ** power) / (((10 ** prefixReq) * unitReq) ** power);
				if (!isNaN(magnitude))
					magnitudes *= magnitude;

				magnitudes *= row.magnitude_in;
			});
		}
    }

    return magnitudes;
}

function loadConvertQuantity(index) {
    var magnitude = getMagnitude(index);
    var basesSum = getBasesSum(index);

    if (document.querySelector("#inp-given") == null)
        return;

    var dataRow = getVariablesFromPage2()[index];
    if (dataRow !== undefined && dataRow != null && dataRow != "undefined") {
		document.querySelector("#inp-given").value = dataRow.magnitude_in;
        var details = dataRow.detail;
		$.map(details, function(thisQuantity, i){
			if (thisQuantity.quantity == "Mass") {
				// set power	
				document.querySelector("#mass-p").value = thisQuantity.unitPIndividual;
				// set unit	
				console.log(thisQuantity.unitGivenIndividual , 'thisQuantity.unitGivenIndividual')
				document.querySelector("#mass-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#mass-req").value = thisQuantity.unitReqIndividual;
				//document.querySelector("#mass-req").value = thisQuantity.unitGivenIndividualT;

				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#mass-req").value = thisQuantity.unitReqIndividual2;
				}
				
				// set prefix	
				document.querySelector("#m-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#m-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Time") {
				// set power	
				document.querySelector("#time-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#time-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#time-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#time-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#t-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#t-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Length") {
				// set power	
				document.querySelector("#length-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#length-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#length-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#length-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#l-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#l-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Temperature") {
				// set power	
				document.querySelector("#temperature-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#temperature-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#temperature-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#temperature-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#te-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#te-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Energy") {
				// set power	
				document.querySelector("#energy-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#energy-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#energy-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#energy-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#e-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#e-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Power") {
				// set power	
				document.querySelector("#Power-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Power-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Power-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Power-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#p-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#p-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Force") {
				// set power	
				document.querySelector("#Force-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Force-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Force-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Force-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#f-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#f-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Pressure") {
				// set power	
				document.querySelector("#Pressure-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Pressure-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Pressure-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Pressure-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#pr-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#pr-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Torque Moment") {
				// set power	
				document.querySelector("#Torque-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Torque-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Torque-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Torque-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#to-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#to-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Area") {
				// set power	
				document.querySelector("#Area-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Area-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Area-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Area-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#a-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#a-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Volume") {
				// set power	
				document.querySelector("#Volume-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Volume-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Volume-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Volume-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#v-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#v-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Velocity") {
				// set power	
				document.querySelector("#Velocity-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Velocity-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Velocity-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Velocity-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#ve-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#ve-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Acceleration") {
				// set power	
				document.querySelector("#Acceleration-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Acceleration-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Acceleration-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Acceleration-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#ac-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#ac-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Dynamic Viscocity") {
				// set power	
				document.querySelector("#Dynamic-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Dynamic-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Dynamic-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Dynamic-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#DV-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#DV-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Kinematic Viscocity") {
				// set power	
				document.querySelector("#Kinematic-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Kinematic-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Kinematic-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Kinematic-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#KV-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#KV-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Charge") {
				// set power	
				document.querySelector("#Charge-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Charge-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Charge-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Charge-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#C-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#C-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Current") {
				// set power	
				document.querySelector("#Current-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Current-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Current-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Current-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#Cu-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#Cu-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Luminous Intensity") {
				// set power	
				document.querySelector("#Luminous-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Luminous-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Luminous-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Luminous-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#Lu-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#Lu-prefix-2").value = thisQuantity.unitPrefix2Individual;
			} else if (thisQuantity.quantity == "Amount of Substance") {
				// set power	
				document.querySelector("#Amount-p").value = thisQuantity.unitPIndividual;
				// set unit		
				document.querySelector("#Amount-given").value = thisQuantity.unitGivenIndividual;
				document.querySelector("#Amount-req").value = thisQuantity.unitReqIndividual;
				if(thisQuantity.unitReqIndividual2 !== undefined){
					document.querySelector("#Amount-req").value = thisQuantity.unitReqIndividual2;
				}
				// set prefix	
				document.querySelector("#AOS-prefix-1").value = thisQuantity.unitPrefix1Individual;
				document.querySelector("#AOS-prefix-2").value = thisQuantity.unitPrefix2Individual;
			}
		});
    
}
calc1();
localStorage.removeItem("back-envelope.com/convertQuantity");
}

function GetResult(PowerId){
	var row = PrepareDataForCalculation(document.getElementById(PowerId));
	var prefix1 = GetPrefixText(row.unitPrefix1Individual == 0 ? "" : row.unitPrefix1Individual);
	var prefix2 = GetPrefixText(row.unitPrefix2Individual == 0 ? "" : row.unitPrefix2Individual);
	var power = eval(row.unitPIndividual);
	var unitsGivenT = GetUnitsText(row.quantity,row.unitGivenIndividual);
	var unitsReqT = GetUnitsText(row.quantity,row.unitReqIndividual);
	let result ; 
	if(power == 1){
		result = {
			result: EvaluateVariable(input,row, true),
			unitGiven: prefix1 + unitsGivenT ,
			unitReq: prefix2 + unitsReqT,
			unitinput : eval(row.unitPIndividual)
		}
	}else{
		result = {
			result: EvaluateVariable(input,row, true),
			unitGiven: prefix1 + unitsGivenT + "^" + power,
			unitReq: prefix2 + unitsReqT + "^" + power,
			unitinput : eval(row.unitPIndividual)
		}
	}
	
	// var result = {
	// 	result: EvaluateVariable(input,row, true),
	// 	unitGiven: prefix1 + unitsGivenT + "^" + power,
	// 	unitReq: prefix2 + unitsReqT + "^" + power
	// }
	
	return result;
}

function calc1() {
    input = document.getElementById("inp-given").value;
    
	// for Mass
    mass = document.getElementById("mass-p").value;
	var massgivenunit = "";
    var massrequnit = "";
    var massinput = "";
    var massresult = 1;
    if (mass != 0 && mass != "") {
		
		var row = GetResult("mass-p");
		massgivenunit = row.unitGiven;
        massrequnit = row.unitReq;
		massresult = row.result;
		massinput = row.unitinput;
    } 


    // for Time
    time = document.getElementById("time-p").value;
	var timegivenunit = "";
	var timerequnit = "";
	var timeinput = "";
	var timeresult = 1;
    if (time != 0 && time != "") {
		var row = GetResult("time-p");
		timegivenunit = row.unitGiven;
        timerequnit = row.unitReq;
		timeresult = row.result;
		timeinput = row.unitinput;
    } 

    // for Length
    length = document.getElementById("length-p").value;
	var lengthgivenunit = "";
	var lengthrequnit = "";
	var lengthinput = "";
	var lengthresult = 1;

    if (length != 0 && length != "") {
		var row = GetResult("length-p");
		lengthgivenunit = row.unitGiven;
        lengthrequnit = row.unitReq;
		lengthresult = row.result;
		lengthinput = row.unitinput;
    } 

    // for Temperature
    temperature = document.getElementById("temperature-p").value;
	var temperaturegivenunit = "";
	var temperaturerequnit = "";
	var temperatureinput = "";
	var temperatureresult = 1;
    if (temperature != 0 && temperature != "") {
		var row = GetResult("temperature-p");
		temperaturegivenunit = row.unitGiven;
        temperaturerequnit = row.unitReq;
		temperatureresult = row.result;
		temperatureinput = row.unitinput;
    } 
	
    // for Energy
    energy = document.getElementById("energy-p").value;
	var energygivenunit = "";
	var energyrequnit = "";
	var energyinput = "";
	var energyresult = 1;

    if (energy != 0 && energy != "") {
		var row = GetResult("energy-p");
		//console.log(row , 'row Energy')
		energygivenunit = row.unitGiven;
        energyrequnit = row.unitReq;
		energyresult = row.result;
		energyinput = row.unitinput;
    } 

    // for Torque
    Torque = document.getElementById("Torque-p").value;
	var Torquegivenunit = "";
	var Torquerequnit = "";
	var Torqueinput = "";
	var Torqueresult = 1;
    if (Torque != 0 && Torque != "") {
		var row = GetResult("Torque-p");
		//console.log(row , 'row Torque')
		Torquegivenunit = row.unitGiven;
        Torquerequnit = row.unitReq;
		Torqueresult = row.result;
		Torqueinput = row.unitinput;
    } 

    // for Power
    Power = document.getElementById("Power-p").value;
	var Powergivenunit = "";
	var Powerrequnit = "";
	var Powerinput = "";
	var Powerresult = 1;

    if (Power != 0 && Power != "") {
		var row = GetResult("Power-p");
		Powergivenunit = row.unitGiven;
        Powerrequnit = row.unitReq;
		Powerresult = row.result;
		Powerinput = row.unitinput;
    } 
	
    // for Pressure
    Pressure = document.getElementById("Pressure-p").value;
	var Pressuregivenunit = "";
	var Pressurerequnit = "";
	var Pressureinput = "";
    var Pressureresult = 1;
    if (Pressure != 0 && Pressure != "") {
		var row = GetResult("Pressure-p");
		Pressuregivenunit = row.unitGiven;
        Pressurerequnit = row.unitReq;
		Pressureresult = row.result;
		Pressureinput = row.unitinput;
    }

    // for Force
    Force = document.getElementById("Force-p").value;
	var Forcegivenunit = "";
	var Forcerequnit = "";
	var Forceinput = "";
	var Forceresult = 1;
    if (Force != 0 && Force != "") {
		var row = GetResult("Force-p");
		Forcegivenunit = row.unitGiven;
        Forcerequnit = row.unitReq;
		Forceresult = row.result;
		Forceinput = row.unitinput;
    } 

    // for Volume
    Volume = document.getElementById("Volume-p").value;
	var Volumegivenunit = "";
	var Volumerequnit = "";
	var Volumeinput = "";
	var Volumeresult = 1;
    if (Volume != 0 && Volume != "") {
		var row = GetResult("Volume-p");
		Volumegivenunit = row.unitGiven;
        Volumerequnit = row.unitReq;
		Volumeresult = row.result;
		Volumeinput = row.unitinput;
    } 

    // for Area
    Area = document.getElementById("Area-p").value;
	var Areagivenunit = "";
	var Arearequnit = "";
	var Areainput = "";
	var Arearesult = 1;
    if (Area != 0 && Area != "") {
		var row = GetResult("Area-p");
		Areagivenunit = row.unitGiven;
        Arearequnit = row.unitReq;
		Arearesult = row.result;
		Areainput = row.unitinput;
    } 

    // for Velocity
    Velocity = document.getElementById("Velocity-p").value;
	var Velocitygivenunit = "";
	var Velocityrequnit = "";
	var Velocityinput = "";
	var Velocityresult = 1;
    if (Velocity != 0 && Velocity != "") {
		var row = GetResult("Velocity-p");
		Velocityresult = row.result;
		Velocitygivenunit = row.unitGiven;
        Velocityrequnit = row.unitReq;
		Velocityinput = row.unitinput;
    } 
	
    // for Acceleration
    Acceleration = document.getElementById("Acceleration-p").value;
	var Accelerationgivenunit = "";
	var Accelerationrequnit = "";
	var Accelerationinput = "";
	var Accelerationresult = 1;
    if (Acceleration != 0 && Acceleration != "") {
		var row = GetResult("Acceleration-p");
		Accelerationresult = row.result;
		Accelerationgivenunit = row.unitGiven;
        Accelerationrequnit = row.unitReq;
		Accelerationinput = row.unitinput;
		
    } 

    // for Dynamic Viscocity
    Dynamic = document.getElementById("Dynamic-p").value;
	console.log(Dynamic , 'Dynamic')
	var Dynamicgivenunit = "";
	var Dynamicrequnit = "";
	var Dynamicinput = "";
	var Dynamicresult = 1;
    if (Dynamic != 0 && Dynamic != "") {
		var row = GetResult("Dynamic-p");
		Dynamicresult = row.result;
		Dynamicgivenunit = row.unitGiven;
        Dynamicrequnit = row.unitReq;
		Dynamicinput = row.unitinput;
    } 
	
    // for Kinematic Viscocity
    Kinematic = document.getElementById("Kinematic-p").value;
	var Kinematicgivenunit = "";
	var Kinematicrequnit = "";
	var Kinematicinput = "";
	var Kinematicresult = 1;
    if (Kinematic != 0 && Kinematic != "") {
		var row = GetResult("Kinematic-p");
		Kinematicresult = row.result;
		Kinematicgivenunit = row.unitGiven;
        Kinematicrequnit = row.unitReq;
		Kinematicinput = row.unitinput;
    } 
	
    // for Charge
    Charge = document.getElementById("Charge-p").value;
	var Chargegivenunit = "";
	var Chargerequnit = "";
	var Chargeinput = "";
	var Chargeresult = 1;
    if (Charge != 0 && Charge != "") {
		var row = GetResult("Charge-p");
		Chargeresult = row.result;
		Chargegivenunit = row.unitGiven;
        Chargerequnit = row.unitReq;
		Chargeinput = row.unitinput;		
    } 

    // for Current
    Current = document.getElementById("Current-p").value;
	var Currentgivenunit = "";
	var Currentrequnit = "";
	var Currentinput = "";
	var Currentresult = 1;
    if (Current != 0 && Current != "") {
		var row = GetResult("Current-p");
		Currentresult = row.result;
		Currentgivenunit = row.unitGiven;
        Currentrequnit = row.unitReq;
		Currentinput = row.unitinput;
    } 
	
    // for Luminous Intensity
    Luminous = document.getElementById("Luminous-p").value;
	var Luminousgivenunit = "";
	var Luminousrequnit = "";
	var Luminousinput = "";
	var Luminousresult = 1;
    if (Luminous != 0 && Luminous != "") {
		var row = GetResult("Luminous-p");
		Luminousresult = row.result;
		Luminousgivenunit = row.unitGiven;
        Luminousrequnit = row.unitReq;
		Luminousinput = row.unitinput;
    } 
	
    // for Amount of Substance
    Amount = document.getElementById("Amount-p").value;
	var Amountgivenunit = "";
	var Amountrequnit = "";
	var Amountinput = "";
	var Amountresult = 1;
    if (Amount != 0 && Amount != "") {
		var row = GetResult("Amount-p");
		Amountresult = row.result;
		Amountgivenunit = row.unitGiven;
        Amountrequnit = row.unitReq;
		Amountinput = row.unitinput;
		
    } 

    finalresult = eval(massresult * timeresult * lengthresult * temperatureresult * energyresult * Torqueresult * Powerresult * Pressureresult * Volumeresult * Forceresult * Arearesult * Velocityresult * Accelerationresult * Dynamicresult * Kinematicresult * Chargeresult * Currentresult * Luminousresult * Amountresult * input);
    unitgivenv = document.getElementById("mass-given").value + " " + document.getElementById("time-given").value + " " + document.getElementById("length-given").value + " " + document.getElementById("temperature-given").value + " " + document.getElementById("energy-given").value + " " + document.getElementById("Torque-given").value + " " + document.getElementById("Power-given").value + " " + document.getElementById("Pressure-given").value + " " + document.getElementById("Volume-given").value + " " + document.getElementById("Force-given").value + " " + document.getElementById("Area-given").value + " " + document.getElementById("Velocity-given").value + " " + document.getElementById("Acceleration-given").value + " " + document.getElementById("Dynamic-given").value + " " + document.getElementById("Kinematic-given").value + " " + document.getElementById("Charge-given").value + " " + document.getElementById("Current-given").value + " " + document.getElementById("Luminous-given").value + " " + document.getElementById("Amount-given").value + " " + input;
    unitreqv = document.getElementById("mass-req").value + " " + document.getElementById("time-req").value + " " + document.getElementById("length-req").value + " " + document.getElementById("temperature-req").value + " " + document.getElementById("energy-req").value + " " + document.getElementById("Torque-req").value + " " + document.getElementById("Power-req").value + " " + document.getElementById("Pressure-req").value + " " + document.getElementById("Volume-req").value + " " + document.getElementById("Force-req").value + " " + document.getElementById("Area-req").value + " " + document.getElementById("Velocity-req").value + " " + document.getElementById("Acceleration-req").value + " " + document.getElementById("Dynamic-req").value + " " + document.getElementById("Kinematic-req").value + " " + document.getElementById("Charge-req").value + " " + document.getElementById("Current-req").value + " " + document.getElementById("Luminous-req").value + " " + document.getElementById("Amount-req").value + " " + input;
    unitgivenf = massgivenunit + " " + timegivenunit + " " + lengthgivenunit + " " + temperaturegivenunit + " " + energygivenunit + " " + Torquegivenunit + " " + Powergivenunit + " " + Pressuregivenunit + " " + Volumegivenunit + " " + Forcegivenunit + " " + Areagivenunit + " " + Velocitygivenunit + " " + Accelerationgivenunit + " " + Dynamicgivenunit + " " + Kinematicgivenunit + " " + Chargegivenunit + " " + Currentgivenunit + " " + Luminousgivenunit + " " + Amountgivenunit;
    unitreqf = massrequnit + " " + timerequnit + " " + lengthrequnit + " " + temperaturerequnit + " " + energyrequnit + " " + Torquerequnit + " " + Powerrequnit + " " + Pressurerequnit + " " + Volumerequnit + " " + Forcerequnit + " " + Arearequnit + " " + Velocityrequnit + " " + Accelerationrequnit + " " + Dynamicrequnit + " " + Kinematicrequnit + " " + Chargerequnit + " " + Currentrequnit + " " + Luminousrequnit + " " + Amountrequnit;
    unitinputf = massinput + " " + timeinput + " " + lengthinput + " " + temperatureinput + " " + energyinput + " " + Torqueinput + " " + Powerinput + " " + Pressureinput + " " + Volumeinput + " " + Forceinput + " " + Areainput + " " + Velocityinput + " " + Accelerationinput + " " + Dynamicinput + " " + Kinematicinput + " " + Chargeinput + " " + Currentinput + " " + Luminousinput + " " + Amountinput;
	
	//console.log(unitinputf.unitPIndividual)
	// if(sortUnits(document.querySelector("#given-unit").value) !== '') {
		// 	console.log(sortUnits(document.querySelector("#given-unit").value).match(/\d/g))
		// 	var numb = sortUnits(document.querySelector("#given-unit").value).match(/\d/g);
		// 	numb = numb.join("");
		// 	console.log(numb , 'numb')
		// }
		
		
		// if(sortUnits(document.querySelector("#given-unit").value)){
			// 	document.querySelector("#given-unit").value = sortUnits(document.querySelector("#given-unit").value);
			// 	document.querySelector("#req-unit").value = sortUnits(document.querySelector("#req-unit").value);
			// }
			
    console.log(unitgivenf.replace(/\s+/g, ' ').trim() , 'unitgivenf.replace')
    console.log(unitgivenf , 'unitgivenf')
    document.getElementById("given-unit").value = unitgivenf.replace(/\s+/g, ' ').trim();
    document.querySelector("#given-unit").value = sortUnits(document.querySelector("#given-unit").value , unitinputf);
    document.getElementById("req-unit").value = unitreqf.replace(/\s+/g, ' ').trim();
    document.querySelector("#req-unit").value = sortUnits(document.querySelector("#req-unit").value , unitinputf);

    var finalres12 = finalresult.toPrecision(15);
    document.getElementById("out-req").value = finalres12.toUpperCase();

}



// for table 2 

function calc2() {

    mass1 = document.getElementById("mass1").value;
    time1 = document.getElementById("time1").value;
    length1 = document.getElementById("length1").value;
    temperature1 = document.getElementById("temperature1").value;
    energy1 = document.getElementById("energy1").value;
    torque1 = document.getElementById("torque1").value;
    power1 = document.getElementById("power1").value;
    pressure1 = document.getElementById("pressure1").value;
    force1 = document.getElementById("force1").value;
    volume1 = document.getElementById("volume1").value;
    area1 = document.getElementById("area1").value;
    velocity1 = document.getElementById("velocity1").value;
    acceleration1 = document.getElementById("acceleration1").value;
    Dynamic1 = document.getElementById("Dynamic1").value;
    Kinematic1 = document.getElementById("Kinematic1").value;
    Density1 = document.getElementById("Density1").value;


    massf = eval(mass1 * 1) + "+" + eval(energy1 * 1) + "+" + eval(torque1 * 1) + "+" + eval(power1 * 1) + "+" + eval(pressure1 * 1) + "+" + eval(force1 * 1) + "+" + eval(Dynamic1 * 1) + "+" + eval(Density1 * 1);
    timef = time1 - (energy1 * (2)) - (torque1 * (2)) - (power1 * (3)) - (pressure1 * (2)) - (force1 * (2)) - velocity1 - (acceleration1 * (2)) - (Dynamic1 * (1)) - (Kinematic1 * (1));
    lengthf = eval(length1 * 1) + "+" + eval(energy1 * 2) + "+" + eval(torque1 * 2) + "+" + eval(power1 * 2) + "+" + eval(force1 * 1) + "+" + eval(volume1 * 3) + "+" + eval(area1 * 2) + "+" + eval(velocity1 * 1) + "+" + eval(acceleration1 * 1) + "+" + eval(pressure1 * (-1)) + "+" + eval(Dynamic1 * (-1)) + "+" + eval(Kinematic1 * (2)) + "+" + eval(Density1 * (-3));
    temperaturef = eval(temperature1 * 1);
    timef1 = eval(timef);
    massf1 = eval(massf);
    lengthf1 = eval(lengthf);
    temperaturef1 = eval(temperaturef);


    document.getElementById("mass2").value = massf1;
    document.getElementById("time2").value = timef1;
    document.getElementById("length2").value = lengthf1;
    document.getElementById("temperature2").value = temperaturef1;

}




// for equivalence checker

function calc3() {
    mass3 = document.getElementById("mass3");
    time3 = document.getElementById("time3");
    length3 = document.getElementById("length3");
    temperature3 = document.getElementById("temperature3");

    mass4 = document.getElementById("mass4");
    time4 = document.getElementById("time4");
    length4 = document.getElementById("length4");
    temperature4 = document.getElementById("temperature4");

    result3 = document.getElementById("result3");

    if (mass3.value == mass4.value && time3.value == time4.value && length3.value == length4.value && temperature3.value == temperature4.value) {
        result3.innerText = "YES";
        result3.style.color = "Green";
    } else {
        result3.innerText = "NO";
        result3.style.color = "red";
    }
}



function calc4() {
    mass3.value = document.getElementById("mass2").value;
    time3.value = document.getElementById("time2").value;
    length3.value = document.getElementById("length2").value;
    temperature3.value = document.getElementById("temperature2").value;

    calc3();
}




function calc5() {
    mass4.value = document.getElementById("mass2").value;
    time4.value = document.getElementById("time2").value;
    length4.value = document.getElementById("length2").value;
    temperature4.value = document.getElementById("temperature2").value;

    calc3();
}