
<div class="row" align="center">
    <div class="col-lg-12">
        <div class="alert alert-dismissible fade show" role="alert" style="color: #fff; background-color: #A2DADA !important;border-color: #A2DADA !important;">
            <strong>
                <div class="custom-control custom-checkbox mr-3">
                    <label for="info_bank" class="switch s-icons s-outline s-outline-info" style="margin-left: 20px !important;">
                        <input type="checkbox" name="info_bank" id="info_bank" onchange="check_bank()">
                        <span class="slider round"></span>
                    </label>
                    <br>
                    <label>{{ __('auth.info_bank') }}</label>

                </div>
            </strong>
        </div>
    </div>
</div>
<div class="row" id="check_bank" hidden="true">
    <div class="col-md-6" id="">
        <label for="bank_name"> <b>{{ __('auth.name_bank') }}</b></label>
        <select id="bank_name" name="bank_name" class="form-control">
            <option value="">{{ __('auth.selbankname') }}</option>
        </select>
    </div>

    <div class="col-md-6" id="">
        <label for="bank_name"> <b>TIPO DE CUENTA</b></label>
        <select id="bank_name" name="bank_name" class="form-control">
            <option value="">{{ __('auth.selbankname') }}</option>
        </select>
    </div>
    
    <div class="col-md-6">
        <label for="number_account"><span style="color: red !important;">*</span> <b>{{ __('auth.number_account') }}</b></label>
        <input type="text" id="number_account" name="number_account" class="form-control">
    </div>

    <div class="col-md-6">
        <label for="number_account"><span style="color: red !important;">*</span> <b>CCI:</b></label>
        <input type="text" id="number_account" name="number_account" class="form-control">
    </div>

</div>

<br>
<div class="row" align="center">
    <div class="col-lg-12">
        <div class="alert alert-dismissible fade show" role="alert" style="color: #fff; background-color: #A2DADA !important;border-color: #A2DADA !important;">
            <strong>
                <div class="custom-control custom-checkbox mr-3">
                    <label for="info_cotitular" class="switch s-icons s-outline s-outline-info" style="margin-left: 20px !important;">
                        <input type="checkbox" name="info_cotitular" id="info_cotitular" onchange="check_cotitular()">
                        <span class="slider round"></span>
                    </label>
                    <br>
                    <label>{{ __('auth.info_cotitular') }}</label>

                </div>
            </strong>
        </div>
    </div>
</div>
<div class="row" id="check_coti" hidden="true">

    <div class="col-md-12">
        <label for="name_cotitular"><span style="color: red !important;">*</span> <b>Apellidos y Nombres Completos del Cotitular</b></label>
        <input type="text" id="name_cotitular" name="name_cotitular" class="form-control">
    </div>


    <div class="col-md-12">
        <label for="numer_document_cotitular"><span style="color: red !important;">*</span> <b>DNI:</b></label>
        <input type="text" id="numer_document_cotitular" name="numer_document_cotitular" class="form-control">
    </div>

</div>
<br>

