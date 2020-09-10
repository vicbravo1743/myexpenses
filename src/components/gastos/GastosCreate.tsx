import * as React from 'react';
import Content from '../shared/Content';

export interface GastosCreateProps {
    
}
 
const GastosCreate: React.SFC<GastosCreateProps> = () => {
    return (
        <Content title="Registra un nuevo gasto 😊">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="form-group col-md-3 col-lg-3 col-sm-12">
                                    <label htmlFor="cantidad">Cantidad</label>
                                    
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="number" className="form-control" id="cantidad"/>
                                    </div>
                                </div>

                                <div className="form-group col-md-3 col-lg-3 col-sm-12">
                                    <label htmlFor="iva">IVA</label>
                                    
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">16%</span>
                                        </div>
                                        <input type="number" className="form-control" id="iva" disabled/>
                                    </div>
                                </div>

                                <div className="form-group col-md-6 col-lg-6 col-sm-12">
                                    <label htmlFor="descripcion">Descripcion</label>
                                    <input type="text" className="form-control" id="descripcion"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6 col-lg-6 col-sm-12">
                                    <label htmlFor="necesario">Necesario</label>
                                    <select id="necesario" className="form-control">
                                        <option value="false">Innecesario</option>
                                        <option value="true">Necesario</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6 col-lg-6 col-sm-12">
                                    <label htmlFor="tipo">Tipo</label>
                                    <select id="tipo" className="form-control">
                                        <option value="debit">Debito</option>
                                        <option value="credit">Credito</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Content>
    );
}
 
export default GastosCreate;