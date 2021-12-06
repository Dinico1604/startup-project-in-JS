let cantidad = prompt ("Cuantos alumnos son?")
let alumnoTotales = [];

 for (i = 0; i < cantidad; i++){
     alumnoTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
 } 
  const tomaAsistencia = (nombre,p)=>{
      let prescencia = prompt (nombre) 
      if (prescencia == "p" || prescencia == "P"){
          alumnoTotales[p][1]++;
      } 
  }

  for (i = 0; i < 30; i++) {
      for(alumno in alumnoTotales){
          tomaAsistencia(alumnoTotales[alumno][0],alumno)
      }
  }

  for (alumno in alumnoTotales){
      let resultado = `${alumnoTotales[alumno][0]}: <br>
      ______Presente: <b>${alumnoTotales[alumno][1]}</b> <br>
      ______Ausente: <b>${ 30 - alumnoTotales[alumno][1]}</b>`
      if (30 - alumnoTotales[alumno][1] > 18){
          resultado+= "<b style='color: red'>  REPROBADO POR INASISTENCIAS</b><br>"
      } else{
          resultado+="<br><br>"
      }
      document.write(resultado)
  }