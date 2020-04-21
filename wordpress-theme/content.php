<main>
    <?php if(have_posts()): ?>
        <?php while (have_posts()): ?>
            <?php the_post(); ?>
            <article>
                <a href="<?php the_permalink(); ?>">
                    <?php the_title(); ?>
                </a>

                <?php edit_post_link("edit"); ?>
                <?php the_content(); ?>
            </article>
        <?php endwhile; ?>
    <?php else: ?>
        <h2>No posts found.</h2>
    <?php endif; ?>
</main>