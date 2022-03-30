<header class="banner">
  <div class="container">
    <a class="brand" href="<?php echo e(home_url('/')); ?>">
      <img src="<?php echo App::getHeaderLogo(); ?>" alt="">
    </a>
    
    
    <nav class="nav-primary">
      <?php if(has_nav_menu('primary_navigation')): ?>
        <?php echo wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']); ?>

      <?php endif; ?>
      <select>
        <?php $__currentLoopData = App::getLanguageOptions()['language_menu']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <option><?php echo e($language['slug']); ?></option>
          
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </select>
    </nav>
  </div>
</header>
