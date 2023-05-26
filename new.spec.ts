<li>
          <button
          class="btn btn-default header-btn-right"
          (click)="openNav()"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style= " margin-top: 20px;"
          >
            <i style="font-size: 19px;color: #131d57;" class="fa fa-user-circle-o user-circle-icon" aria-hidden="true"></i>
          </button>
</li>
<form [formGroup]="form" *ngIf="hidePassword == false">
                <div style="text-align: center;">
                  <div class="col-lg-12 col-md-12 col-sm-12 textAlignLeft">
                    <h4 mat-dialog-title><b>Sign In With Your Existing Email ID</b></h4>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 emailInputDiv">
                    <mat-form-field appearance="fill" class="example-full-width matFormField">
                      <input matInput #input placeholder="Email" formControlName="email">
                    </mat-form-field>
                  </div>
                </div>
                <br>
                <div class="col-lg-12 col-md-12 col-sm-12" style="padding-top: 20px;right: 50px;">
                <button class="btn btn-success" (click)="emailVerification();" [disabled]="!form.valid">Sign In</button>
                </div>
                <br><br>
                <p class="errorMessage" *ngIf="isvalidEmail == false">{{errorMsg}}</p>
              </form>
