function InfoHoteles() {

  return (
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      
      <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/3 sm:w-1/2 content-start sm:pr-10">
        <div class="bg-[#F2F0EF] w-[350px] p-4">
          <h1 class="text-[#0D3B66] font-bold text-md">Reservar por:</h1>
          <br />
          <label for="Departamentos">Departamentos</label>
          <select
            name="Departamentos"
            id="opciones"
            class="rounded-full border border-3 border-[#0D3B66] p-2 w-80"
          >
            <option value="san_salvador" selected>
              San Salvador
            </option>
            <option value="la_libertad">La libertad</option>
            <option value="santa_Ana">Santa Ana</option>
            <option value="chalatenango">Chalatenango</option>
          </select>
          <label for="Tipo de habitación">Tipo de habitación</label>
          <select
            name="Departamentos"
            id="opciones"
            class="rounded-full border border-3 border-[#0D3B66] p-2 w-80"
          >
            <option value="san_salvador" selected>
              Suite
            </option>
            <option value="la_libertad">Individual</option>
            <option value="santa_Ana">Doble</option>
            <option value="chalatenango">Familiar</option>
            <option value="chalatenango">King</option>
            <option value="chalatenango">Queen</option>
          </select>
          <label for="Precio">Precio</label>
          <select
            name="Departamentos"
            id="opciones"
            class="rounded-full border border-3 border-[#0D3B66] p-2 w-80"
          >
            <option value="san_salvador" selected>
              $60-$90
            </option>
            <option value="la_libertad">$100-$250</option>
            <option value="santa_Ana">$300-$450</option>
            <option value="chalatenango">$500-$650</option>
          </select>
          <label for="Calificación">Calificación</label>
          <select
            name="Departamentos"
            id="opciones"
            class="rounded-full border border-3 border-[#0D3B66] p-2 w-80"
          >
            <option value="san_salvador" selected>
              Buena
            </option>
            <option value="la_libertad">Muy buena</option>
            <option value="santa_Ana">Excelente</option>
          </select>
          <label for="Servicios">Servicios</label>
          <select
            name="Departamentos"
            id="opciones"
            class="rounded-full border border-3 border-[#0D3B66] p-2 w-80"
          >
            <option value="san_salvador" selected>
              Gym
            </option>
            <option value="la_libertad">Restaurante</option>
            <option value="santa_Ana">Buffet</option>
            <option value="santa_Ana">Piscina</option>
            <option value="santa_Ana">Servicio a la habitación/Limpieza</option>
          </select>
        </div>
      </div>

      <div class="lg:w-2/3 sm:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="border-2 rounded-lg border-red-500 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class=" mx-auto flex flex-wrap items-center">
              <div class="lg:w-1/3 md:w-1/1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                similique, laudantium repudiandae voluptates cupiditate
                excepturi iure molestias blanditiis quia corporis placeat,
                cumque esse ab totam adipisci labore eos dolor perferendis?
              </div>

              <div class="lg:w-1/3 md:w-1/1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                similique, laudantium repudiandae voluptates cupiditate
                excepturi iure molestias blanditiis quia corporis placeat,
                cumque esse ab totam adipisci labore eos dolor perferendis?
              </div>

              <div class="lg:w-1/3 md:w-1/1 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                expedita, earum eos assumenda, sunt iste tenetur, porro ipsam
                quibusdam quisquam repellat? At quae praesentium ipsa dolor
                dolorum doloribus consectetur perspiciatis?
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default InfoHoteles;
