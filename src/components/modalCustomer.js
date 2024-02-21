export const modalCustomer = `
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="modal-title">
        
        <ion-icon name="people-outline"></ion-icon>
       
        Maestro de cliente
      </div>
     
          <form class="frm">
              <div class="col">
                  <div class="form-control">
                      <label for="name">Nombre</label>
                      <input type="text" id="name" placeholder="Escriba el nombre"/>
                  </div>
                  <div class="form-control">
                      <label for="lastName">Apellidos</label>
                      <input type="text" id="lastName" placeholder="Escriba los apellidos"/>
                  </div>
              </div>
              <div class="col">
                  <div class="form-control">
                      <label for="rnc">Cédula</label>
                      <input type="text" id="rnc" placeholder="Escriba la céd. o RNC"/>
                  </div>
                  <div class="form-control">
                      <label for="phone">Teléfono</label>
                      <input type="text" id="phone" placeholder="Escriba el teléfono"/>
                  </div>
              </div>
          </form>
      <div class="modal-footer">
      <button class="btn-save" id="btn-save">
      <ion-icon name="save-outline"></ion-icon>
      Guardar
      </button>
      </div>
    </div>
  </div>
  `
