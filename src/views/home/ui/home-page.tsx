import type React from "react";

import { getTranslations } from "next-intl/server";
import { translationFormats } from "#views/home";

export const HomePage: React.FC = async () => {
  const t = await getTranslations("Home");

  return (
    <main id="home-page" className="container">
      <h1 className="text-2xl font-bold md:text-4xl">{t("title")}</h1>

      <p className="mt-1 font-mono text-sm font-light text-white/70 md:text-base [&_b]:font-semibold [&_b]:text-white">
        {t.rich("description", translationFormats)}
      </p>

      <p className="mt-4 font-mono text-xs font-extralight text-white/50 md:text-sm [&_b]:font-medium">
        {t.rich("fun-fact", translationFormats)}
      </p>

      <p className="mt-4 font-mono text-xs font-extralight text-white md:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        fugiat fugit quia veniam! Eius ex fuga fugiat fugit perspiciatis, quae
        similique voluptatibus. Doloribus ex ipsum quos reprehenderit rerum
        voluptates. Asperiores aspernatur autem commodi consequuntur culpa cum
        cupiditate debitis, deleniti doloremque eius facere fuga harum hic
        labore laboriosam molestiae natus, necessitatibus nobis nulla
        perferendis quas quidem quis quisquam rem reprehenderit sapiente
        suscipit tempore vero voluptatem voluptatibus? Consectetur eaque facilis
        fugit itaque, maiores nemo obcaecati perferendis quam quisquam repellat,
        reprehenderit suscipit tempore ullam, unde voluptates. Assumenda autem
        blanditiis consequatur cupiditate deleniti est expedita harum impedit
        labore minima nemo neque nisi, non nostrum numquam perspiciatis porro
        quaerat quas quibusdam reprehenderit sit vero voluptates? A architecto
        delectus, doloribus fuga itaque nam non. Corporis esse iusto laboriosam
        neque rem rerum, voluptatum. Enim eum, fuga hic impedit ipsam laudantium
        provident sunt tempore. Labore temporibus, veritatis. Ab assumenda atque
        consectetur dicta dolorum earum esse harum ipsa iure laboriosam nemo
        nesciunt nostrum odit possimus qui quisquam quos, rerum suscipit tempora
        vel veritatis voluptatem voluptatibus. Dolor, officiis quaerat! A
        accusamus alias aliquam aperiam assumenda commodi delectus deleniti
        dolore eius ex exercitationem expedita facilis harum itaque maxime nulla
        obcaecati optio perferendis, placeat quasi qui rem repellendus saepe,
        soluta sunt voluptas voluptatum. Accusamus cupiditate dolores, in optio
        ratione rem repellat totam vel? Accusamus aliquam blanditiis delectus
        eum expedita quo saepe. Accusamus accusantium dolores ipsum minus nam,
        necessitatibus nulla pariatur praesentium repellat repudiandae
        temporibus veritatis vitae. Distinctio eius et hic mollitia nam, nemo
        nobis omnis perferendis praesentium quam quasi, qui quia reiciendis!
        Animi architecto commodi consectetur debitis dolor dolorem ducimus eius
        enim id minima, nihil quasi quia quibusdam quo sed temporibus
        voluptatibus? Accusamus accusantium beatae debitis dolores eius eligendi
        eos fuga fugiat fugit harum id illum laudantium mollitia necessitatibus
        nesciunt, nobis quam quisquam quo repudiandae rerum saepe, soluta
        tempora voluptate. Ab aliquam asperiores cupiditate dignissimos dolore
        ea harum ipsum maxime nemo nostrum numquam, qui quis quisquam sed, sequi
        tempore tenetur vero voluptatum? Alias assumenda at dolore pariatur
        praesentium repudiandae soluta! A accusamus adipisci, atque commodi
        culpa eos exercitationem fugit id in ipsa ipsum itaque iure laboriosam
        minima minus nostrum praesentium quasi quibusdam quod quos reiciendis
        sint tempore tenetur, ullam unde vel voluptas. Dolore enim ex facere
        harum impedit inventore non quo quod ut voluptas. Dolores eius fugiat in
        incidunt quaerat quas quasi ratione recusandae saepe tempore. Adipisci
        alias ducimus, ipsum iure officia placeat quas sint vero vitae. Ab
        accusamus, aliquid blanditiis consequuntur cumque eaque facilis illum
        laboriosam laudantium magni modi natus odit quae reprehenderit sapiente
        sunt vel velit! Aut, culpa debitis fugit impedit mollitia nulla possimus
        qui repudiandae sunt? A consectetur cupiditate deleniti deserunt dolorem
        earum eveniet facilis illo impedit ipsam iure minus modi nulla
        perferendis porro quasi quo reiciendis rem repellat repellendus sequi,
        tempora voluptas, voluptate? Accusantium deleniti, esse modi
        perspiciatis quos veritatis. Blanditiis doloremque, eum laborum maxime
        nesciunt nisi obcaecati provident quibusdam quo sed soluta tempora
        voluptatibus! Accusantium alias animi aperiam consequatur consequuntur
        dignissimos doloribus ea eligendi ex explicabo facilis fugit illo
        laboriosam maxime, nemo non, nostrum officia porro possimus quia ratione
        repudiandae soluta sunt tempore voluptate voluptates voluptatibus!
        Accusantium aliquid deserunt dignissimos eaque enim facilis laudantium
        mollitia odio quibusdam, veritatis. Asperiores autem odit repudiandae
        tempore velit voluptate. Deleniti dolores facere iusto necessitatibus
        reiciendis reprehenderit sint, ut. Cupiditate error expedita fuga nisi?
        Amet atque autem cum cupiditate dolorum eius error et facere fuga harum
        incidunt, quis quisquam rerum sint veniam? Aperiam commodi dolor, ea
        excepturi laborum molestias nesciunt nisi numquam odio, officia quas
        repellat reprehenderit tenetur veritatis voluptate? Ab alias blanditiis
        consequatur culpa in labore, modi molestiae praesentium reprehenderit
        rerum. A aliquam asperiores aspernatur at beatae dignissimos ducimus ea
        eum ex excepturi expedita facilis, id impedit non, numquam perferendis
        placeat porro quibusdam quod rerum sint soluta totam veniam voluptatibus
        voluptatum. Beatae consectetur dignissimos maiores nisi quia reiciendis
        ut voluptatibus. Animi beatae natus pariatur quibusdam tenetur.
        Blanditiis eius enim et illum inventore ipsa molestias non, nostrum
        voluptates voluptatibus? A adipisci aliquam aliquid asperiores assumenda
        at atque beatae commodi corporis cum dicta ea et ex excepturi facere
        fuga fugit illo iure labore laudantium magni maiores modi molestias,
        nisi nobis numquam odio sequi sint sit soluta tempora tenetur
        voluptatem, voluptates. Architecto, consequatur cumque debitis deserunt
        ea, esse eum eveniet facere id inventore labore libero nam nesciunt
        nulla quae quis rerum totam voluptates? Eligendi excepturi odio possimus
        quis voluptatum! Ad amet architecto debitis dignissimos dolore eos et,
        fugit inventore magni, placeat reprehenderit rerum, similique veniam
        voluptate voluptates. Ab blanditiis quod voluptatibus. Consectetur
        consequatur dolores excepturi, facilis hic ipsum itaque nesciunt
        possimus praesentium reiciendis sequi suscipit ut vitae. Accusamus culpa
        dignissimos ducimus ipsum laboriosam libero non omnis optio quam? A
        assumenda cupiditate dolor dolorem excepturi impedit, in maxime
        necessitatibus nisi non odio, odit officiis optio perferendis porro quia
        reiciendis repellat, sed sequi voluptate. Ad assumenda dicta enim, eos
        ipsa maiores natus nemo velit vero voluptates? Delectus dolorem, harum
        neque nulla pariatur rerum similique. A ab ad alias aliquam aperiam
        aspernatur autem consectetur consequatur culpa cum dicta dolore et
        eveniet excepturi incidunt inventore ipsa iusto laboriosam magnam
        maiores maxime minus natus nemo, nisi nobis odit omnis perspiciatis
        placeat provident quam qui quia quos sit sunt veniam vero voluptate?
        Alias atque corporis ea id nostrum rem similique tempore voluptatibus! A
        alias cumque debitis, doloribus earum excepturi fugiat, hic id ipsum
        nesciunt placeat quam totam voluptatibus? Asperiores aspernatur culpa
        cupiditate delectus deleniti deserunt dignissimos, doloremque hic,
        illum, incidunt molestiae optio perspiciatis totam ut voluptatibus. Ab
        dolor reiciendis voluptate. Dicta ea facilis in laboriosam odit optio
        pariatur ratione sint. A, accusamus alias animi aperiam aspernatur
        doloribus eaque eos facere, facilis illum ipsum itaque minus nesciunt,
        nihil odio officia quae qui quia quisquam quod ratione sequi tempore
        ullam unde veniam vero voluptates! Ad aliquid cupiditate delectus dolor
        ea earum est inventore iusto labore laudantium libero officiis placeat,
        praesentium quam qui quidem quos sit unde veritatis voluptates! Delectus
        dignissimos eveniet laboriosam laudantium rem? Accusantium alias at aut
        beatae blanditiis consequatur corporis delectus deserunt doloremque
        doloribus esse eum facere fugiat impedit incidunt itaque labore laborum
        magnam magni neque nesciunt nobis perferendis quas qui quia quidem
        quisquam quod quos, ratione recusandae reprehenderit repudiandae sint
        unde velit veniam voluptate voluptatum! Amet aperiam aut autem, culpa,
        delectus deserunt dolores eligendi esse explicabo fugiat id illum ipsam
        nisi, non nulla obcaecati possimus quis quisquam recusandae ut?
        Accusantium asperiores aut culpa cumque doloremque, dolorum enim error
        est exercitationem expedita fuga harum illum, labore magni, nostrum
        obcaecati optio placeat repudiandae rerum saepe sit soluta temporibus
        ullam veniam voluptatem! A aliquam blanditiis facere facilis harum
        maxime quas sapiente similique soluta vel! Harum laudantium molestias
        quos velit? Assumenda at cum dolore error est inventore quae, quo
        recusandae repellendus soluta ullam unde voluptates! Aliquam autem
        doloribus earum error expedita explicabo magnam nisi officiis
        perferendis possimus quasi quibusdam, quisquam repellendus sequi vitae.
        Aperiam aspernatur debitis excepturi hic provident quia repellendus
        tempora? Alias commodi cum delectus deserunt dolores eaque eius est et
        molestiae necessitatibus, officiis qui tempore temporibus ullam veniam
        veritatis voluptas. Adipisci asperiores aspernatur autem dolor
        doloribus, eligendi fuga, id illo in ipsa, mollitia nemo officia
        pariatur rem repellendus sint sit soluta sunt suscipit unde. Accusamus
        alias aliquid aperiam assumenda culpa cupiditate dignissimos, dolor esse
        excepturi fugiat hic illo impedit laudantium magni minima nisi nostrum
        officia omnis quam quibusdam quidem quis repellat sapiente tempora
        temporibus veniam vero, voluptas. A accusantium architecto aut
        consequuntur cum cumque cupiditate dolores iusto laboriosam quam quas
        quisquam ratione repellat similique, suscipit voluptatem voluptates! Ab
        ad amet atque aut commodi distinctio dolorum, eos illo in iure
        laboriosam laborum, maxime mollitia nulla odit officia perferendis
        praesentium reprehenderit sapiente sed velit veritatis vero? Accusantium
        architecto aspernatur consequatur distinctio dolores doloribus enim,
        fugit illum laudantium minima officiis omnis quaerat quia quisquam
        repellat repudiandae sed sequi soluta vero voluptatibus? Accusantium
        aspernatur consequuntur culpa cum fugit hic impedit iste libero magni
        neque, nisi porro qui quo saepe tempora ut veritatis. Aliquam, animi
        blanditiis doloribus exercitationem in minima quae ratione sed sequi
        voluptatem. Aut culpa delectus dolorem doloremque doloribus dolorum,
        expedita ipsam laborum neque non ratione rem unde vel veniam voluptatum.
        Aperiam delectus dignissimos, dolor nam necessitatibus non placeat
        provident quasi quos tenetur! Accusamus, amet aperiam assumenda fuga
        incidunt ipsam laboriosam laudantium libero magnam molestias quia
        tempore totam, unde. Consectetur dolor eius, facere facilis illum ipsa
        magnam minus nihil qui recusandae repellat sed suscipit voluptates.
        Beatae expedita, harum ipsam ipsum neque nobis provident quae quam qui
        repellat, saepe, veniam? Aliquam amet aut commodi cumque deserunt
        dolorem eligendi expedita illum incidunt iste iure iusto libero
        molestias nam nostrum obcaecati odio, officia porro possimus quam qui
        quia repudiandae sapiente sunt temporibus totam vel veniam. Adipisci
        aliquam consequuntur dolores doloribus dolorum earum et eum expedita
        harum in itaque libero odio quas, quo reprehenderit sequi soluta sunt
        totam veniam voluptatibus. Ab commodi dolores fugit libero maiores
        praesentium ratione. Culpa ducimus ea eius iusto praesentium, quos sint.
        Animi assumenda culpa dolorem dolorum, eveniet illum in ipsum qui
        quisquam sequi soluta tempora voluptatem voluptatibus! Aliquam corporis
        cum ex iusto omnis qui quis suscipit veniam vero. Adipisci assumenda
        atque deleniti et nulla, perferendis reiciendis sit ullam. Accusantium
        aliquid molestiae quae ullam.
      </p>
    </main>
  );
};
HomePage.displayName = "Home page";
