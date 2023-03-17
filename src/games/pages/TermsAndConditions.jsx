import React from 'react'

export const TermsAndConditions = () => {

    const web = 'Aintech.online';
    const fecha = '8 de marzo de 2023';
    const email = 'aintechsoftware@gmail.com';
    const contacto = '+56981262202';
    const devolucion = "24" //Devolución de dinero en horas
    const cuentaBanco = 'N° 976264134';
    const nombreBanco = 'Scotiabank'

    return (
        <div className='container mt-5 p-5 cardDetailGame'>
            <h4 className='text-center mb-5'>Términos y Condiciones Generales de Uso</h4>
            <p><b><br />PRIMERO.- GENERALIDADES.</b></p>
            <p>El presente documento, elaborado con fecha <b>{fecha}</b>, regula los términos y condiciones generales aplicables al 
            acceso y uso que el Usuario realizará del Sitio Web: <b>{web}</b>, así como a cualquier tipo de información, contenido, imagen, video, audio u otro material comunicado o presente en el Sitio Web.</p>
            <p>Para efectos del presente documento se entenderá como "Sitio Web": la apariencia externa de los interfaces de pantalla, tanto 
                de forma estática como de forma dinámica, es decir, el árbol de la navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el 
                árbol de navegación (en adelante, "Contenidos") y todos aquellos servicios o recuerdos en línea que en su caso ofrezca a los usuarios (en adelante, "Servicios").</p>
            <p><b>{web}</b> se reserva la facultad de modificar, en cualquier momento, y sin previo aviso, la presentación y configuración del Sitio Web y de los Contenidos y 
            Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento <b>{web}</b> pueda interrumpir, desactivar y/o cancelar cualquiera 
            de estos elementos que se integran en el Sitio Web o el acceso a los mismos.</p>
            <p>El acceso y uso del sitio web y del contenido relacionado o anexo, descrito en el presente documento, se regirá íntegramente por las leyes de la República de 
                Chile. Por consiguiente, las visitas, así como también los posibles contratos o transacciones que el usuario realice en la plataforma que representa el sitio web, así como 
                los efectos jurídicos que éstas pudieran tener, quedan sometidos a las leyes y a la jurisdicción de los tribunales de justicia de la República de Chile. De particular importancia 
                resultan la aplicación de la Ley N° 19.628 de Protección de Datos Personales y la Ley N° 19.496 sobre Derechos del Consumidor.</p>

            <p>Adicionalmente, este sitio web y sus contenidos, así como también las transacciones que se pudieran llevar a cabo en él, están destinados a todo tipo de usuarios, sin importar su nacionalidad y lugar de residencia, no bien existe primacía respecto a la aplicación de la legislación chilena para los casos puntuales.</p>

            <p>Se recomienda al usuario leer detenidamente el contenido de estos Términos y Condiciones Generales de Uso, así como imprimir y conservar una copia de éstas en una unidad de disco local de almacenamiento, o de almacenamiento portátil, para su conveniencia y seguridad.</p>

            <p><b>SEGUNDO.- INFORMACIÓN DEL SITIO WEB <b>{web}</b>.</b></p>
            <p>La titularidad de <b>{web}</b> corresponde a <b>MATÍAS VALLEJOS HIDALGO Y SEBASTIÁN ARIEL MOSQUERA</b>, Cédula Nacional de Identidad número: 19713573-5 correspondiente a MATÍAS VALLEJOS HIDALGO.</p>
            <p>El Sitio Web también cuenta con un servicio de atención al cliente, ante el cual se pueden hacer valer distintas presentaciones o reclamos relacionados con el uso o acceso
                a la página así como también con los negocios y transacciones realizados en el sitio web, el cual puede ser contactado a la dirección de correo electrónico {email} o al número telefónico {contacto}.</p>

            <p><b>TERCERO.- USUARIO.</b></p>
            <p>El acceso a este Sitio Web, la navegación y uso del mismo, así como cualquier espacio habilitado para interacciones entre Usuarios, o
                entre éste y el Sitio Web (secciones de comentarios, espacios de blogging y micro blogging, y extensiones destinadas a esta función), conferirán a las
                personas la condición de "Usuario". Por lo tanto, se entienden aceptar los Términos y Condiciones Presentes en este documento desde el momento de acceder
                al Sitio Web o a sus contenidos, así como también todo tipo de futuras modificaciones que se hicieran a los Términos y Condiciones, sin perjuicio de lo que
                pudiera establecer futura legislación dictada en la República de Chile destinada a regular esta clase de documentos, o que fuera aplicable al uso de Sitios Web.</p>
            <p>Adicionalmente, el acceso al Sitio Web por parte del Usuario tendrá un carácter libre y gratuito, sin que éste tenga que pagar por acceder al sitio o sus contenidos, más allá del costo de la conexión a internet, en los casos que correspondiera.</p>
            <p><b>Responsabilidad de los Usuarios.</b></p>
            <p><b>{web}</b> entrega al Usuario un servicio caracterizado por la diversidad del contenido proporcionado. El Usuario asume
                su responsabilidad al ingresar al Sitio Web, para realizar un correcto uso del mismo y sus contenidos. Así, esta responsabilidad se extenderá, de forma no taxativa, a:</p>
            <p className='ps-5'>Usar la información, Contenidos y/o Servicios y datos ofrecidos por <b>{web}</b>, sin que sea contrario a estos Términos y
                Condiciones, así como al Ordenamiento Jurídico Chileno y a la Moral y el Orden Público, o que de cualquier otra forma pudieran acarrear la vulneración de
                derechos de terceros, o el funcionamiento y operaciones normales del Sitio Web.</p>
            <p><b>{web}</b> se reserva el derecho de retirar todos aquellos comentarios e interacciones emanados de Usuarios que vulneren la ley, el respeto
                a la dignidad a la persona, que sean discriminatorios en base a raza, nacionalidad, sexo, orientación sexual, estirpe o condición, así como también
                aquellos que contengan contenido pornográfico o que constituyan mensajes conocidos como "spam", o que atenten contra la juventud o infancia, el orden, o la
                seguridad pública o que, a juicio de <b>{web}</b>, no resulten apropiados para el Sitio Web.</p>
            <p>De todas maneras, <b>{web}</b> no se hace responsable de las opiniones, de cualquier tipo, emitidas por los Usuarios mediante comentarios u herramientas o extensiones de blogging o microblogging.</p>
            <p>El simple acceso a <b>{web}</b> no supone una relación comercial entre <b>{web}</b> y el Usuario.</p>
            <p><b>Capacidad Legal.</b></p>
            <p>El Sitio Web no requiere una edad mínima para poder acceder a su Contenido y Servicios; por lo tanto, estos Términos y Condiciones se aplicarán indistintamente a
                todos los Usuarios del Sitio Web que cumplan con lo estipulado en este documento.</p>
            <p>Aún así, las reglas legales de capacidad establecidas en el ordenamiento jurídico regirán en todos aquellos casos donde su aplicación sea pertinente. Por tanto, si una
                persona no tiene capacidad legal para contratar, debe abstenerse de utilizar los Contenidos y Servicios que requieran de esta capacidad. <b>{web}</b> podrá, en cualquier
                momento, en forma temporal o definitiva, suspender la participación de usuarios sobre los cuales se compruebe que carecen de capacidad legal para usar de los Servicios y
                Contenido que la requieran, o que proporcionen información falsa, inexacta o fraudulenta al Sitio Web.</p>
            <p>El Sitio Web <b>{web}</b> está dirigido principalmente a Usuarios residentes en la República de Chile. <b>{web}</b> no asegura que el
                Sitio Web cumpla, parcial o totalmente, con legislaciones de otros países. Si el Usuario reside o está domiciliado en un país extranjero, y
                decide acceder y/o navegar en este Sitio Web, lo hará bajo su propia responsabilidad, asegurándose de que tal acceso y navegación cumpla con
                lo dispuesto en la legislación local que le sea aplicable, no asumiendo <b>{web}</b> responsabilidad alguna que pueda derivar de dicho acceso.</p>

            <p><b>CUARTO.- DERECHOS Y GARANTÍAS DEL USUARIO DEL SITIO.</b></p>
            <p>El Usuario gozará de todos los derechos que le reconoce la legislación sobre protección al consumidor vigente en Chile, adicionalmente a los derechos que le otorgan
                estos Términos y Condiciones. Además, el Usuario dispondrá en todo momento de los derechos de información, rectificación y cancelación de los datos personales conforme
                a la Ley N° 19.628 sobre protección de datos personales.</p>
            <p><b>Devoluciones.</b></p>
            <p>En caso de devolución de dinero, <b>{web}</b> realizará un abono en el medio de pago que hubiera utilizado el Usuario, en un plazo no mayor a {devolucion} horas, luego de
                haberse aprobado la devolución, lo que será informado debidamente al Usuario mediante el correo electrónico que hubiera proporcionado, o bien mediante algún otro medio de comunicación adicional.</p>
            <p><b>Garantías Legales.</b></p>
            <p>En caso que el producto no cuente con las características informadas o publicitadas, si tuviera algún tipo de daño o le faltara algún componente, podrá ser cambiado
                inmediatamente. Si presenta fallas o defectos dentro de los 6 meses siguientes a la fecha de recepción, el Usuario puede optar por su reparación gratuita o, previa restitución, su cambio
                o bien la devolución del precio pagado, siempre que los daños o deterioros no hubieran sido por culpa del Usuario. La devolución puede realizarse en algún lugar acordado con algún representante del Sitio Web.</p>

            <p><b>QUINTO.- CONTRATACIÓN.</b></p>
            <p>Para realizar compras o contratar servicios en el Sitio Web, se deben seguir los siguientes pasos, haciendo click cuando corresponda:</p>
            <p className='ps-5'><b>a.-</b> Para dar inicio al proceso de contratación es necesario que se confirme haber leído y aceptado los presentes Términos y Condiciones.</p>
            <p className='ps-5'><b>b.-</b> Seleccionar el producto o servicio que interesa y agregarlo al "carro de compra", u alguna opción similar con nombres parecidos ("canasto", "cesta", por nombrar algunos).</p>
            <p className='ps-5'><b>c.-</b> Iniciar sesión en el sitio o ingresar correo electrónico y contraseña. En caso de no estar registrado y si se desea hacerlo, haga uso del ícono y menú que corresponda a esta opción.</p>
            <p className='ps-5'><b>d.-</b> Seleccionar la modalidad de envío y entrega entre las alternativas disponibles en el sitio (link con las alternativas disponibles). Ante la eventualidad de no existir alternativas disponibles, seguir las instrucciones para la entrega de acuerdo a lo que se señale en el sitio.</p>
            <p className='ps-5'><b>e.-</b> Seleccionar el medio de pago.</p>
            <p className='ps-5'><b>f.-</b> Una vez que se ha realizado la orden de compra o de contratación de servicio, se desplegará en la pantalla la siguiente información, la cual debe aparecer antes de la selección del medio de pago:</p>
            <p className='ps-5'><b>I.</b> Descripción del producto adquirido o servicio contratado.</p>
            <p className='ps-5'><b>II.</b> Precio del producto o servicio.</p>
            <p className='ps-5'><b>III.</b> Indicación del costo del envío, cuando corresponda.</p>
            <p className='ps-5'><b>IV.</b> Fecha de entrega del producto adquirido, según el tipo de entrega escogido; o fecha de inicio del servicio contratado.</p>
            <p className='ps-5'><b>V.</b> Medio de pago que escogerá el usuario.</p>
            <p className='ps-5'><b>VI.</b> Valor total de la operación.</p>
            <p className='ps-5'><b>VII.</b> Otras condiciones de la orden de producto o servicio adquirido.</p>
            <p className='ps-5'><b>VIII.</b> Posibilidad de imprimir y conservar la orden, por parte del Usuario.</p>
            <p className='ps-5'><b>IX.</b> Número de identificación único de la orden, con la cual el Usuario puede hacer seguimiento en línea de ella, o bien utilizarlo para identificarla al momento de realizarse la entrega o retiro.</p>
            <p className='ps-5'><b>g.-</b> Envío de la información al correo electrónico registrado por el Usuario.</p>
            <p className='ps-5'><b>h.-</b> La orden luego será enviada de forma automática a un proceso de confirmación de identidad, en el cual se resguardará siempre la seguridad y privacidad del usuario y del proceso mismo de contratación, disponibilidad, vigencia y cupo del medio de pago que se haya seleccionado.</p>
            <p className='ps-5'><b>i.-</b> Una vez cumplido lo anterior, se perfecciona el contrato, realizándose el cargo en el medio de pago seleccionado. Posteriormente se realiza el envío del comprobante de compra con la boleta o factura que corresponda en formato electrónico y será despachado el producto, de acuerdo al modo de entrega seleccionado.</p>
            <p className='ps-5'><b>j.-</b> No se verá afectado el comprador en sus derechos ni tampoco se le efectuarán cargos, sin que sea confirmada su identidad.</p>

            <p><b>SEXTO.- MEDIOS DE PAGO.</b></p>
            <p>A menos que se indique un medio distintos para casos u ofertas específicos, los productos y servicios que se informan y transan en este sitio sólo podrán ser pagados por medio de: </p>
            <p className="ps-5"><b>a.-</b> Tarjeta de crédito bancarias Visa, Mastercard, Dinners Club International, American Express u otras habilitadas y válidamente emitidas en Chile o
                en el extranjero, siempre que mantengan un contacto vigente para este efecto con <b>{web}</b>.</p>
            <p className="ps-5"><b>b.-</b> Tarjetas de débito bancarias acogidas al sistema Redcompra o habilitadas para realizar pagos y transacciones a través del sistema
                WebPay, válidamente emitidas en Chile por bancos nacionales, que mantengan un contrato vigente para tales efectos con <b>{web}</b>.</p>
            <p className="ps-5"><b>c.-</b> Tranferencia bancaria, la cual se realizará a la cuenta {cuentaBanco}, la cual <b>{web}</b> mantiene en el Banco {nombreBanco}.</p>
            <p>Otros medios de pago que pudieran ser anunciados y aceptados a futuro, los cuales serán informados pertinentemente por los canales y conductos que correspondan.</p>
            <p>El pago con tarjetas de débito se realizará a través de WebPay, que es un sistema de pago electrónico que se encarga de hacer el cargo automático a la cuenta bancaria del usuario.</p>
            <p>El Usuario declara que entiende que estos medios o portales de pago son de propiedad de terceras
                empresas o personas proveedoras de dichos servicios, independientes y no vinculadas a <b>{web}</b>, por lo que la continuidad de
                su prestación de servicios en el tiempo, así como el correcto funcionamiento de sus herramientas y botones de pago en línea, son de
                exclusiva responsabilidad de las proveedoras de estos servicios y en ningún caso de <b>{web}</b>.</p>

            <p><b>SÉPTIMO.- RESPONSABILIDAD.</b></p>
            <p><b>{web}</b> no responderá, en ningún caso, por los siguientes hechos:</p>
            <p className="ps-5"><b>a.-</b> Uso indebido que Usuarios o visitantes al Sitio Web realicen del contenido almacenado, o de los productos que adquirieran en el mismo, así como de los derechos de propiedad industrial o intelectual contenidos en el Sitio Web, o en los productos o servicios.</p>
            <p className="ps-5"><b>b.-</b> Daños y perjuicios, concretos o eventuales, causados a Usuarios derivados del funcionamiento de las herramientas de búsqueda del Sitio Web, así como de errores generados por elementos técnicos del Sitio o del motor de búsqueda.</p>
            <p className="ps-5"><b>c.-</b> Contenido de Sitios Web a las que los Usuarios puedan acceder con o sin autorización de <b>{web}</b>.</p>
            <p className="ps-5"><b>d.-</b> Pérdida, mal uso o uso no autorizado de contraseña o códigos de validación, sea por parte del Usuario o de un tercero, de la forma expresada en estos Términos y Condiciones. De la misma forma, las partes reconocen y dejan constancia que el soporte computacional entregado por <b>{web}</b> no es infalible, por lo tanto, pueden verificarse circunstancias ajenas a la voluntad de <b>{web}</b> que puedan causar que el Sitio Web o su plataforma no se encuentren operativos durante un cierto período de tiempo.</p>
            <p className="ps-5"><b>e.-</b> Información referida a <b>{web}</b> que se encuentre en Sitios Web distintos o ajenos a <b>{web}</b>.</p>
            <p>En caso de estar ante alguno de estos supuestos, <b>{web}</b> tomará todas las medidas para reestablecer el correcto funcionamiento del Sitio Web y de su sistema comunicacional lo más pronto posible, sin que pudiera imputársele algún tipo de responsabilidad por aquello.</p>
            <p><b>{web}</b> no asegura disponibilidad ni continuidad de funcionamiento del Sitio Web, y tampoco que en cualquier momento, los Usuarios puedan acceder a élo a las promociones y ofertas que estuvieran disponibles.</p>
            <p><b>{web}</b> tampoco es responsable por la existencia de virus u otros elementos perjudiciales en los documentos o archivos almacenados en los sistemas informáticos de todo tipo de propiedad de los Usuarios. <b>{web}</b> no responderá de perjuicios causados al Usuario, derivados del uso indebido de las tecnologías y plataformas puestas a su disposición, cualquiera sea la forma en que se utilicen inadecuadamente estos elementos tecnológicos. Asimismo, <b>{web}</b> no responderá por daños producidos por el uso indebido o mala fe de los Usuarios al utilizar <b>{web}</b>.</p>
            <p>No obstante, en el caso de producirse un doble pago por algún Usuario en el Sitio Web, <b>{web}</b> realizará la devolución íntegra de la suma del sobrepago, dentro de los 7 días siguientes a la recepción del correspondiente reclamo realizado por el Usuario o sus representantes, el cual debe contar con un anexo que incluya los comprobantes de pago originales correspondientes al sobrepago realizado.</p>
            <p>Al momento de registrarse, hacer login, para la realización de transferencias y para comunicarse, <b>{web}</b> utiliza certificados digitales de seguridad (SSL), con el fin de encriptar la información. <b>{web}</b> no almacena ni conserva datos financieros de sus Usuarios.</p>

            <p><b>OCTAVO.- POLÍTICA DE SEGURIDAD DE DATOS.</b></p>
            <p><b>{web}</b> adoptará todas las medidas necesarias para resguardar los datos de sus Usuarios, como sistemas de encriptado de información, certificados de seguridad y
                otros semejantes o equivalentes que <b>{web}</b> considere prudentes para estos efectos. En caso de realizarse cambios hechos por el Usuario en la información registrada o
                ingresada en el Sitio Web, o bien, si se produce la detección de cualquier tipo de irregularidad atribuible al Usuario relacionada con la información entregada o con
                transferencias realizadas por el Usuario, así como con todo lo relacionado a la identificación en las mismas o el uso de medios de pago o simplemente como medida de protección
                de identidad, el personal del Sitio Web se pondrá en contacto con el Usuario, sea por vía telefónica o por correo electrónico, para corroborar los datos y la información, así como para
                evitar la existencia de posibles fraudes.</p>
            <p>En la eventualidad de no establecerse contacto en un plazo de 72 horas, y pensando en la seguridad del Usuario, cualquier compra de un producto o contratación de un servicio
                no será confirmada. Se informará al Usuario por vía telefónica o por correo electrónico el hecho de haber quedado sin efectos producto de no haber podido comprobarse su identidad o medio
                de pago utilizado. Adicionalmente, los comprobantes en que consten las gestiones realizadas para intentar contactarse con el Usuario con el objetivo de confirmar la transacción, quedarán
                a disposición de éste último por un plazo de 1 días, en caso que el Usuario quisiera confirmar la compra o contratación. Consultas adicionales
                pueden realizarse por las vías de contacto con el Sitio Web establecidas en el párrafo relativo a la Información del Sitio Web, presente en este mismo documento de Términos y Condiciones.</p>
            <p>Con todo lo anterior, los Usuarios son plenamente responsables por el extravío o pérdida, mal uso o uso no autorizado que se diera del producto o servicio adquirido o contratado, sea que incurran ellos o terceros en los hechos descritos previamente, luego de realizada una compra o contratación de servicio siguiendo la forma estipulada en los presentes Términos y Condiciones.</p>

            <p><b>Datos Personales.</b></p>
            <p>Al acceder al Sitio Web <b>{web}</b>, los Usuarios o visitantes garantizan que la información que proporcionan para ingresar o para la compra de productos o contratación de servicios es veraz, completa, exacta y actualizada. </p>
            <p>De acuerdo a lo establecido en la Ley N° 19.628 de Protección de Datos Personales, los datos de este tipo que se suministren al Sitio Web, pasan a formar parte de una base de datos perteneciente a <b>{web}</b> y serán destinados única y exclusivamente para los fines que motivaron su entrega, especialmente para la comunicación entre <b>{web}</b> y sus Usuarios, validar datos relativos a compras o contratación de servicios, concretar despachos, y responder consultas. Estos datos nunca serán comunicados o compartidos con otras empresas sin expresa autorización de su titular (el Usuario) ni serán transferidos internacionalmente.</p>
            <p><b>{web}</b> jamás solicitará a sus Usuarios la entrega de datos personales o financieros a través de correos electrónicos.</p>
            <p><b>{web}</b> presume que los datos incorporados por los Usuarios o por personas autorizadas por éstos son correctos y exactos. Los Usuarios, al aceptar los presentes Términos y Condiciones, manifiestan su conformidad con que los datos personales aportados al rellenar formularios presentes en <b>{web}</b> puedan ser utilizados posteriormente para la elaboración y envío de ofertas que puedan diferir de las ofrecidas en el Sitio Web.</p>
            <p>Sin perjuicio de lo anterior, <b>{web}</b> garantiza a todos sus Usuarios el libre ejercicio de los derechos contemplados en la Ley N° 19.628 de Protección de Datos Personales en lo relativo a la información, modificación, cancelación y bloqueo de sus datos personales. En consecuencia, los Usuarios podrán realizar requerimientos relacionados con los ya mencionados derechos, los que serán respondidos por <b>{web}</b> en un plazo no superior a dos días corridos.</p>

        </div>
    )
}
