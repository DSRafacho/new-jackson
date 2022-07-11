const Agendamento = () => (
    <div>
        <div class="w-full xsm:h-fit md:h-screen text-j-white p-12">
            <p class="text-5xl mb-12 title-decoration font-dancing-script font-thin xsm:mt-12 md:mt-0">Agende um horário</p>
            <form autocomplete="off">
                <div class="flex xsm:justify-center md:flex-row flex-wrap gap-8">

                    <div class="xsm:w-full lg:w-1/4 md:w-1/4 big:w-1/4">
                        <label class="label">Nome <b class="text-rose-400">*</b></label>
                        <input type="text" class="input" name="name" formControlName="personName" required />
                    </div>

                    <div class="xsm:w-full lg:w-1/4 md:w-1/4 big:w-1/4">
                        <label class="label">Data <b class="text-rose-400">*</b></label>
                        <input style="height: 1.5rem" type="date" class="input" name="date" formControlName="date" required />
                    </div>

                    <div class="xsm:w-full lg:w-1/4 md:w-1/4 big:w-1/4">
                        <label class="label">Horario <b class="text-rose-400">*</b></label>
                        {/* <select *ngIf="date?.valid;else timeEnable" id="time-select" style="height: 1.5rem" name="time" class="input bg-white " formControlName="time" required (click)="verifyIfDateIsNotNull()">

          <option *ngFor="let hour of avaliableTimes" value="{{hour}}">{{hour}}</option>
        </select> */}

                        {/* <ng-template #timeEnable>
          <select style="height: 1.5rem" name="time" class="input bg-white " formControlName="time">
            <option value="" selected>Selecione um dia</option>
          </select>
        </ng-template> */}

                    </div>

                    <div class="xsm:w-full lg:w-1/4 md:w-1/4 big:w-1/4">
                        <label class="label">Serviço <b class="text-rose-400">*</b></label>
                        <select style="height: 1.5rem" name="time" class="input bg-white " formControlName="service" required>

                            <option value="">Selecione</option>

                            <option value="C">Corte</option>
                            <option value="B">Barba</option>
                            <option value="CB">Corte e barba</option>
                            <option value="CP">Barba e pezinho</option>
                            <option value="PE">Pezinho</option>
                            <option value="R">Relaxamento</option>
                            <option value="L">Luzes</option>
                            <option value="S">Selagem</option>
                            <option value="PL">Platinar</option>
                        </select>

                    </div>

                    <div class="xsm:w-full lg:w-1/4 md:w-1/4 big:w-1/4">
                        <label class="label">Telefone <b class="text-rose-400">*</b></label>
                        <input angularFormsMask="(DD) D DDDD-DDDD" type="text" class="input" name="name" formControlName="cellphone" placeholder="(00) 9 0000-0000" required />
                    </div>

                    <div class="xsm:w-full lg:w-1/4 md:w-1/4 big:w-1/4">
                        <label class="label">Email </label>
                        <input type="text" class="input" name="email" formControlName="email" />
                        {/* <div *ngIf="email?.errors?.['email']" class="text-amber-400">Este email não é válido</div> */}
                    </div>

                    <div class="center xsm:w-full lg:w-1/4 big:w-1/4 md:w-1/4 md:mt-6">
                        <button type="submit" class="rounded border border-zinc-600 text-j-white bg-zinc-600 hover:bg-zinc-700 w-full h-8 px-5">Confirmar</button>
                    </div>

                </div>

            </form>

            <iframe class="xsm:w-full xsm:h-80 md:h-64 lg:h-72 xsm:mt-12 xsm:mb-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.3631300062303!2d-43.92770703670506!3d-19.880609081251073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a613d4a8df3%3A0x94d90c267576dd60!2sRua%20Silva%20Fortes%20151!5e0!3m2!1spt-BR!2sbr!4v1646998761271!5m2!1spt-BR!2sbr" style="border:0" allowfullscreen="" loading="lazy"></iframe>
        </div>

    </div>
)

export default Agendamento