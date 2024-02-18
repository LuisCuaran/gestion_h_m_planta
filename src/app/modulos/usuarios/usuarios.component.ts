import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  //variables globales
  verf= false;
  usuario: any;
  user = {//se crea una variable tipo objeto para desarrollar insertar
    nombre: "",
    apellido:"",
    rol:"",
    usuario:"",
    clave:""// estos son los capmos de las tabla usuario
   
  };

  //para validar
  validnombre= false;
  validapellido = false;
  validrol = false;
  validusuario = false;
  validclave = false;

  constructor(private suser: UsuariosService) {}
  ngOnInit(): void {
    this.consulta(); //comando para que se ejecute la consuta en pantalla 
    this.limpiar();

  }
  //mostrar el formulario
  mostrar(dato:any) {  //recive un dato no especificado por eso any
    switch(dato){
      case 0:  //si es cero el formulario debe ocultarse
        this.verf = false;
        break;
        case 1:  //si es 1 el formulario no debe de ocultarse
          this.verf = true;
        break;
    }
  }

  limpiar(){
    this.user.nombre="";
    this.user.apellido="";
    this.user.rol="";
    this.user.usuario="";
    this.user.clave="";

  }

  //para validar
  validar(){
    if(this.user.nombre == ""){
      this.validnombre = false;
    }else{
      this.validnombre = true;
    }
    if(this.user.apellido == ""){
      this.validapellido = false;
    }else{
      this.validapellido = true;
    }
    if(this.user.rol == ""){
      this.validrol = false;
    }else{
      this.validrol = true;
    }
    if(this.user.usuario == ""){
      this.validusuario = false;
    }else{
      this.validusuario= true;
    }
    if(this.user.clave == ""){
      this.validclave= false;
    }else{
      this.validclave = true;
    }
  }
  
 consulta() {
    this.suser.consultar().subscribe((result:any)=>{
      this.usuario = result;
      //console.log(this.usuario);
    })
  }

  ingresar(){
    //console.log(this.cat);
      this.validar();

      if(this.validnombre==true && this.validapellido==true && this.validrol==true && this.validusuario==true && this.validclave){
    this.suser.insertar(this.user).subscribe((datos:any)=>{//se llama al servicio insertary mando los servicios donde los guarda y manda un resultado ok
      if (datos[`resultado`]==`OK`) {
        //alert(datos['mensaje']);
        this.consulta();//muestra la consulta
      }
    })
    this.mostrar(0);//mostrar, cero para que el formulario se muestre automaticamente
    this.limpiar();
  }


}

pregunta(id: any, nombre:any){ //funcion 
  console.log("entro con el id " + id);
  Swal.fire({
    title: 'Esta seguro de eliminar el usuario '+ nombre +'?',
    text: "El proceso no podra ser revertido!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.borrarusuario(id);
      Swal.fire({
        title: "Eliminado!",
        text: "El usuario ha sido eliminado.",
        icon: "success"
      });
    }
  });
}

borrarusuario(id:any){
  console.log(id);
  this.suser.eliminar(id).subscribe((datos:any)=> {
    if(datos['resultado']=='OK'){
      this.consulta();
    }
    
  });
  
}

}

